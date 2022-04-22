import React from 'react'
import { NavLink } from 'react-router-dom'
import test from './trying.jpg'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, Timestamp, where } from "firebase/firestore"; 
import { db,storage } from '../../firebase';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from "react-toastify";
import { async } from '@firebase/util';
import { getAuth, signInWithPopup , GoogleAuthProvider, signOut } from "firebase/auth";
import Footer from '../footer'

const provider = new GoogleAuthProvider();

function Header(){
    return(
        <div className='m-4 flex justify-between items-center border-b-black border-b-[1px]'>
            <div className='text-6xl  text-yellow-900 font-logo'>
                Profile
            </div>
            <NavLink to='/front' className='font-body text-xs sm:text-base p-2 bg-yellow-900/25 rounded-lg hover:border-black hover:border-[1px] hover:scale-110 duration-300'> 
            Main Page </NavLink>
        </div>
    )
}

function Main(){

    const [user,setUser] = React.useState({
        useremail:'',
        status:false,
    })
    
    const handleAuth = () => {
        const auth = getAuth()
        signInWithPopup(auth,provider)
        .then(res=>{
            const user = res.user
            setUser((prevUser)=>({
                useremail: user.email,
                status: !prevUser.status,
            }))
        })
    }

    const handleSignout = () => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            setUser((prevUser)=>({
                useremail: '',
                status: !prevUser.status,
            }))
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    const [ads,setAds] = React.useState([])

    React.useEffect(()=>{
        const adsRef = collection(db, "ads")
        const q = query(adsRef, where('mailid', '==', user.useremail))
        onSnapshot(q,(snapshot)=>{
            const ads = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
            setAds(ads)
        })
    },[user.status])


    function UploadCard(){

        function Delete({id,img}){

            const handleRemove = async(e) =>{
                try{
                    await deleteDoc(doc(db, 'ads', id))
                    toast('Item deleted succesfully', {type:'success'})
                    const storeRef = ref(storage, img)
                    await deleteObject(storeRef)

                } catch(error){
                    toast('Error deleting item', {type:'error'})
                }
                
            }

            return(
                <div>
                    <button onClick={(e) => handleRemove(e)} className='hover:border-black hover:border-[1px] hover:scale-110 duration-300 px-2 py-[3px] bg-yellow-100/50 rounded-lg'> Remove </button>
                </div>
            )
        }

        return(
            <div>
                {ads.length == 0 ? (
                    <p>No uploads!</p>
                ) : (
                    ads.map(({id,price,old,img})=>(
                        <div className='flex items-center' key={id}>
                            <img src={img} className='w-24 rounded-lg m-2' alt='cycle'></img>
                            <div className='pl-2 border-l-black border-l-[1px]'>
                                <p><b>Price:</b> {price}</p> 
                                <p><b>Years Old:</b> {old}</p> 
                                <Delete id={id} img={img}/>
                            </div>
                        </div>
                    ))
                )}
            </div>
        )
    }

    function Info({email,status}){

        return(
            <div className='mx-4 my-2 p-2 rounded-lg text-base font-body bg-[#daad86]/50'>
                <div>
                    { status == true ? (
                        <button onClick={handleSignout} className='m-2 hover:border-black hover:border-[1px] hover:scale-110 duration-300 px-2 py-[3px] bg-yellow-100/50 rounded-lg'>
                            Sign out 
                        </button>
                    ) : (
                        <button onClick={handleAuth} className='m-2 hover:border-black hover:border-[1px] hover:scale-110 duration-300 px-2 py-[3px] bg-yellow-100/50 rounded-lg'>
                        Login(with institute email only) 
                    </button>
                    )}
                </div>
                    { status == true ? (
                        <div>
                            <p className='m-2'><b>Mail:</b> {email} </p>
                            <div className='bg-orange-700/20 p-2 rounded-lg m-2'>
                                <div><b>Uploads</b></div>
                                <UploadCard/>
                            </div>
                        </div>
                    ) : (
                        <p className='mx-4'> If you don't login with institute email then no data will be visible and form will not be uploaded</p>
                    )}
            </div>
        )
    }

    const [formData, setFormData] = React.useState({
        price:'',
        old:'',
        contact:'',
        img:'',
    })

    const [progress, setProgress] = React.useState(0)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : [e.target.value]})
    }
    const handleImageChange = (e) => {
        setFormData({...formData, img : e.target.files[0]})
    }

    const handleSubmit = () => {
        if (!formData.price || !formData.old || !formData.contact) {
            alert('Please fill all the fields')
            return
        }

        const storageRef = ref(storage, `/images/${Date.now()}${formData.img.name}`)

        const uploadImg = uploadBytesResumable(storageRef,formData.img)

        uploadImg.on("state_changed",
            (snapshot)=>{
                const progresspercent =  ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                setProgress(progresspercent)
            }, 
            (err) => {
                console.log(err)
            },
            ()=>{
                setFormData({
                    price:'',
                    old:'',
                    contact:'',
                })

                getDownloadURL(uploadImg.snapshot.ref)
                .then((url)=>{
                    const adref = collection(db,'ads')
                    addDoc(adref,{
                        mailid: user.useremail,
                        price:formData.price,
                        old:formData.old,
                        contact:formData.contact,
                        img:url,
                        time: Date.now(),
                    })
                    .then(() => {
                        toast("Ad added successfully", { type: "success" });
                        setProgress(0);
                    })
                    .catch((err) => {
                        toast("Error adding ad", { type: "error" });
                    });
                })
            }
        )
        
    }

    return(
        <div>
            <Info email={user.useremail} status={user.status} />
            { user.status == true ? (
                <div className='bg-[#daad86]/50 mx-4 my-2 rounded-lg'>
                    <div className='font-body text-xl border-b-black border-b-[1px] p-2'>
                        Upload Form
                    </div>
                    <div className='flex flex-col text-base font-body p-2'>
                        <input
                            type='text'
                            placeholder='Price(in Rs.)'
                            name='price'
                            className='border-b-black border-b-[1px] p-2 m-2 rounded-sm bg-yellow-50'
                            value={formData.price}
                            onChange={(e)=>handleChange(e)}
                            />
                        <input
                            type='text'
                            placeholder='Years Old(Number)'
                            name='old'
                            className='border-b-black border-b-[1px] p-2 m-2 rounded-sm bg-yellow-50'
                            value={formData.old}
                            onChange={(e)=>handleChange(e)}
                            />
                        <input
                            type='text'
                            placeholder='Phone Number'
                            name='contact'
                            className='border-b-black border-b-[1px] p-2 m-2 rounded-sm bg-yellow-50'
                            value={formData.contact}
                            onChange={(e)=>handleChange(e)}
                            />
                        <p className='m-2'>Upload Image (square only)</p>
                        <input
                            type='file'
                            name='img'
                            className='m-2 w-[300px]'
                            accept='image/*'
                            onChange={(e)=>handleImageChange(e)}
                            />
                        <button onClick={handleSubmit} className='hover:border-black hover:border-[1px] duration-300 px-2 py-[3px] bg-yellow-100/50 rounded-lg'> Submit </button>
                    </div>
                </div>
            ) : (
                <p className='mx-8 pb-72'> Login to upload </p>
            )}            
        </div>
    )
}

const Profile = () => {
  return (
    <div className='bg-yellow-100 h-[1001%]'>
        <div className='p-4'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    </div>
  )
}

export default Profile


