import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shuddha_samachar/pages/area_categorised_page.dart';
import 'package:velocity_x/velocity_x.dart';



import '../models/catagory.dart';
import '../models/country_catagory.dart';
import '../models/default_news_model.dart';


class HomePage extends StatefulWidget {
  const HomePage({ Key? key }) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Area> areas = <Area>[];
  List<Catagory> catagories = <Catagory>[];
  List<Newsdetails> newslist = <Newsdetails>[];

  bool _loading = true;

  @override
  void initState() {
    super.initState();
    areas = getArea();
    catagories = getCatagory();
    
    getNewsDetails();
  }


  getNewsDetails() async {
    News newsClass = News();
    await newsClass.getNews();
    newslist = newsClass.news;
    setState(() {
      _loading = false;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return 
      Scaffold(
        appBar: AppBar(
          elevation: 0,
          foregroundColor: Colors.black,
          backgroundColor: Colors.white,
          title: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
            const Icon(CupertinoIcons.news,color: Colors.blue,size: 40,).px12(),
            "शुद्ध ".text.amber500.xl2.bold.make(),
            "Samachar".text.blue900.xl4.extraBold.make()
            ],),

        ),


        body: 
        SafeArea(
          child: 
          _loading
          ?Container(
            child: const Center(
              child: CircularProgressIndicator()),)
          :SingleChildScrollView(
            child: Container(
                  color: const Color.fromARGB(255, 245, 239, 226),
                  child: 
                  Column(
                    children: 
                    [
                      Container(
                        height: 100,
                        child: 
                        ListView.builder(
          
                          shrinkWrap: true,
                          itemCount: areas.length,
                          scrollDirection: Axis.horizontal,
                          itemBuilder: (BuildContext context, int index) {
                            return AreaCatagoryTile(
                              areaimage: areas[index].areaImageUrl, 
                              areaname: areas[index].areaName,
                              areaurl: areas[index].urltoarea
                            );
                          },
                        ),
                      ).px8(),
                      Container(
          
                      height: 43,
                      child: ListView.builder(
          
                        shrinkWrap: true,
                        itemCount: catagories.length,
                        scrollDirection: Axis.horizontal,
                        itemBuilder: (BuildContext context, int index) {
                          return CatagoryTile(
                            caturl: catagories[index].url,
                            // areaimage: [index].areaImageUrl, 
                            catagoryName: catagories[index].catagoryName
                          );
                        },
                      ),
                    ).px8(),
                      
                      Row(
                        children: [
                                    "Top HeadLines".text.caption(context).xl3.make().px12().pOnly(top: 10)
                        ],
                      ),

                      Container(
                      
                      
                      child: ListView.builder(
                        physics: const ClampingScrollPhysics(),
          
                        shrinkWrap: true,
                        itemCount: newslist.length,
                        scrollDirection: Axis.vertical,
                        itemBuilder: (BuildContext context, int index) {
                          return NewsTile(
                          
                            newsdetail: newslist[index],
          
          
          
                          );
                        },
                      ),
          
          
                      )
                    ]
                  )
              ),
          ),

    ),  
    drawer: const Drawer(),
    );
  }
}







class AreaCatagoryTile extends StatelessWidget {
  const AreaCatagoryTile({ Key? key, required this.areaimage, required this.areaname, required this.areaurl }) : super(key: key);
  final String areaimage;
  final String areaname,areaurl;

  @override
  Widget build(BuildContext context) {
    return Card(
      color: const Color.fromARGB(255, 229, 196, 168),
      child: InkWell(
        splashColor: Colors.amber,
        onTap: (() {
        Navigator.push(context, MaterialPageRoute(
          builder: (
            (context) => 
              CategorisedPage(caturl: areaurl)

          ) )
        );
      }),
        child: Column(
          children: [
            Container(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Image.asset(areaimage,width: 120,height: 70,
                // isAntiAlias: true,
                
                fit: BoxFit.fill
                
                ).p2(),
              ),
              
              ),
            Center(child: Text(areaname,style: const TextStyle(fontSize: 15,fontWeight: FontWeight.bold),))
          ],
        ),
      ),
    )
    .box
    .roundedLg.make();
  }
}








class CatagoryTile extends StatelessWidget {
  const CatagoryTile({ Key? key, required this.caturl,required this.catagoryName }) : super(key: key);
  final String caturl;
  final catagoryName;

  @override
  Widget build(BuildContext context) {
    return Card(
     
      color: const Color.fromARGB(255, 229, 196, 168),
      child: InkWell(
        splashColor: Colors.amber,
         onTap: (() {
        Navigator.push(context, MaterialPageRoute(
          builder: (
            (context) => 
              CategorisedPage(caturl: caturl)

          ) )
        );
      }),
        child: Column(
          children: [
            Text(catagoryName,style: const 
              TextStyle(fontSize: 15,fontWeight: FontWeight.bold),)
              .centered()
              .p8()
          ],
        ),
      ),
    );
  }
}








class NewsTile extends StatelessWidget {
  const NewsTile({ Key? key, required this.newsdetail,  }) : super(key: key);
  final Newsdetails newsdetail;
  
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 10,
      child: InkWell(
        splashColor: Colors.amber,
        onTap: (){

        },
        child: Column(
          children: [
            
            Container(
              
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Image.network(newsdetail.imageurl,
                // isAntiAlias: true,
                // height: 200,
                fit: BoxFit.fitWidth
                
                ).p2(),
              ).p2(),
              
              ),
            Center(child: Text(newsdetail.title,style: const TextStyle(fontSize: 15,fontWeight: FontWeight.bold),))
          ],
        ),
      ),
    ).box.roundedLg.make().p2().py8();
  }
}