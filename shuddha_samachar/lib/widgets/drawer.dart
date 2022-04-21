// ignore_for_file: prefer_const_constructors

// import 'dart:html';

// import 'package:apk/pages/home_dart.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shuddha_samachar/pages/home_page.dart';
import 'package:velocity_x/velocity_x.dart';
// import 'package:apk/utils/routs.dart';

// import 'package:cupertino_icons';

class MyDrawer extends StatefulWidget {
  const MyDrawer({Key? key}) : super(key: key);

  @override
  State<MyDrawer> createState() => _MyDrawerState();
}

class _MyDrawerState extends State<MyDrawer> {

  moveToHome(BuildContext context) async {
    
      

      await Future.delayed(const Duration(seconds: 0));
      await Navigator.push(context, MaterialPageRoute(builder:((context) => HomePage()) ));


  }
  

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Container(
        color: Color.fromARGB(255, 229, 196, 168),
        child: ListView(
          padding: EdgeInsets.zero,
          children:  [
            DrawerHeader(
              child: UserAccountsDrawerHeader(
                // onDetailsPressed: () {
                  
                // },
                margin: EdgeInsets.all(0),
                decoration: BoxDecoration(color: Color.fromARGB(255, 92, 81, 110)),
                accountName: Text("user@name"),
                accountEmail: Text(
                  "user@email",
                ),

                currentAccountPicture: CircleAvatar(
                  backgroundImage:
                      AssetImage("lib/utils/images/India.jpg"),
                  
                  
                ),


              ),
              padding: EdgeInsets.zero,
              margin: EdgeInsets.all(0),
            ),
            ListTile(
              leading: Icon(
                Icons.home,
                
              ),
              title: "Home".text.xl.make(),
              onTap:()=>moveToHome(context),
            ),
            ListTile(
              leading: Icon(
                CupertinoIcons.briefcase_fill,
                
              ),
              title: "Contact Me".text.xl.make(),
              subtitle: Text("Shubham Jaiswal\nshubham.jaiswal.ece21@itbhu.ac.in"), 
            )
          ],
        ),
      ),
    );
  }
}