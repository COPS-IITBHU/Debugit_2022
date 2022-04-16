import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

import '../models/catagory.dart';
import '../models/country_catagory.dart';


class HomePage extends StatefulWidget {
  const HomePage({ Key? key }) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Area> areas = <Area>[];
  List<Catagory> catagories = <Catagory>[];

  @override
  void initState() {
    super.initState();
    areas = getArea();
    catagories = getCatagory();
    
    
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


        body: SafeArea(child: 
          Container(
              color: const Color.fromARGB(255, 245, 239, 226),
              child: 
              Column(
                children: 
                [
                  Container(
                    height: 135,
                    child: 
                    ListView.builder(

                      shrinkWrap: true,
                      itemCount: areas.length,
                      scrollDirection: Axis.horizontal,
                      itemBuilder: (BuildContext context, int index) {
                        return AreaCatagoryTile(
                          areaimage: areas[index].areaImageUrl, 
                          areaname: areas[index].areaName,
                          areaurl: areas[index].Url
                        );
                      },
                    ),
                  ).p8(),
                  Container(
                    
                  height: 45,
                  child: ListView.builder(
                    
                    shrinkWrap: true,
                    itemCount: catagories.length,
                    scrollDirection: Axis.horizontal,
                    itemBuilder: (BuildContext context, int index) {
                      return CatagoryTile(
                        // areaimage: [index].areaImageUrl, 
                        catagoryName: catagories[index].catagoryName
                      );
                    },
                  ),
                ).p8(),
                ]
              )
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
      child: Column(
        children: [
          Container(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(areaimage,width: 150,height: 100,
              // isAntiAlias: true,
              
              fit: BoxFit.fill
              
              ).p2(),
            ),
            
            ),
          Center(child: Text(areaname,style: const TextStyle(fontSize: 15,fontWeight: FontWeight.bold),))
        ],
      ),
    )
    .box
    .roundedLg.make();
  }
}








class CatagoryTile extends StatelessWidget {
  const CatagoryTile({ Key? key, required this.catagoryName }) : super(key: key);
  final String catagoryName;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
          
      },
      child: Card(
        color: const Color.fromARGB(255, 229, 196, 168),
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
