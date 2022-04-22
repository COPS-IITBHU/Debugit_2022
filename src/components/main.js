import React from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'
import test from './trying.jpg';

// let data = [
//     {
//         by:'Vaibhav',
//         contact:'1234567890',
//         old:'2',
//         price:1000,
//         id:1,
//     },
// ]

function Card(){

    const [ads,setAds] = React.useState([])

    React.useEffect(()=>{
        const adsRef = collection(db, "ads")
        const q = query(adsRef, orderBy("time","desc"))
        onSnapshot(q,(snapshot)=>{
            const ads = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
            setAds(ads)
        })
    },[])




    return(
            <div>
                {ads.length == 0 ? (
                    <p className='pb-72'>No uploads!<br/> First sign in to see any possible uploads(upper right corner)</p>
                ) : (
                    ads.map(({id,price,old,mailid,img,contact})=>(
                        <div className='mt-2 pb-8' key={id}>
                            <div className="bg-[#daad86]/50 font-body w-[100%] h-44 sm:h-52 p-2 rounded-lg my-2 items-center hidden sm:flex">
                                <img src={img} alt="cycle" className="w-32 h-32 rounded-lg sm:h-48 sm:w-48"></img>
                                <div className='flex items-center w-[100%] border-l-black border-l-[1px] m-2 sm:text-base h-36 sm:h-48 text-xs'>
                                    <div className='flex-col h-[100%] w-[100%] rounded-lg m-2 p-2 bg-orange-700/10'>
                                        <p className='p-[5px]'><b>Seller:</b> {mailid} </p>
                                        <p className='p-[5px]'><b>Years Old:</b> {old} </p>
                                        <p className='p-[5px]'><b>Price(in Rs):</b> {price} </p>
                                        <p  className='p-[5px]'><b>Contact:</b> {contact} </p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#daad86]/50 flex-col w-[100%] h-64 rounded-lg p-2 my-2 sm:hidden text-base'>
                                <div className='w-[100%] h-1/2 flex'>
                                    <img src={img} alt='cycle' className='w-28 h-28 rounded-lg'></img>
                                    <div className='flex-col h-28 w-[100%] rounded-lg ml-2 p-2 bg-orange-700/10'>
                                        <p className='p-[5px]'><b>Years Old:</b> {old} </p>
                                        <p className='p-[5px]'><b>Price(in Rs):</b> {price}</p>
                                    </div>
                                </div>
                                <div className='w-[100%] h-1/2'>
                                    <div className='flex-col h-28 w-[100%] rounded-lg p-2 bg-orange-700/10'>
                                        <p className='p-[5px]'><b>Seller:</b> {mailid} </p>
                                        <p className='p-[5px]'><b>Contact:</b> {contact} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
    )
}

function Main(){
    
    return(
        <div className="h-[100%] p-2 m-4 rounded-lg font-body bg-[#daad86]/25">
            <div className="p-2 w-[100%] border-black border-b-[1px]">
                <span className="text-base sm:text-xl md:text-2xl font-bold">OPEN DEALS</span>
            </div>
            <Card/>
        </div>
    )
}

export default Main;