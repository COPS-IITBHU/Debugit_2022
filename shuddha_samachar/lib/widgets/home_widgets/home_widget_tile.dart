import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:cached_network_image/cached_network_image.dart';

import '../../models/default_news_model.dart';
import '../../pages/artical_web_page.dart';
import '../../pages/categorised_page.dart';

class AreaCatagoryTile extends StatelessWidget {
  const AreaCatagoryTile(
      {Key? key,
      required this.areaimage,
      required this.areaname,
      required this.areaurl})
      : super(key: key);

  final String areaimage;
  final String areaname, areaurl;

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      color: Colors.white,
      child: InkWell(
        splashColor: Colors.amber,
        onTap: (() {
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: ((context) => CategorisedPage(caturl: areaurl))));
        }),
        child: Column(
          children: [
            Container(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Image.asset(areaimage,
                        width: 120,
                        height: 70,
                        // isAntiAlias: true,
                        fit: BoxFit.fill)
                    .p2(),
                // child: Image.network(areaimage,
                //         width: 120,
                //         height: 70,
                //         // isAntiAlias: true,
                //         fit: BoxFit.fill)
                //     .p2(),
              ),
            ),
            Center(
                child: Text(
              areaname,
              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
            ))
          ],
        ),
      ),
    ).box.roundedLg.make();
  }
}

class CatagoryTile extends StatefulWidget {
  const CatagoryTile(
      {Key? key, required this.caturl, required this.catagoryName})
      : super(key: key);

  final catagoryName;
  final String caturl;

  @override
  State<CatagoryTile> createState() => _CatagoryTileState();
}

class _CatagoryTileState extends State<CatagoryTile> {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      color: Colors.white,
      child: InkWell(
        splashColor: Colors.amber,
        onTap: (() {
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: ((context) =>
                      CategorisedPage(caturl: widget.caturl))));
        }),
        child: Column(
          children: [
            Text(
              widget.catagoryName,
              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
            ).centered().p8()
          ],
        ),
      ),
    );
  }
}

class NewsTile extends StatelessWidget {
  const NewsTile({
    Key? key,
    required this.newsdetail,
  }) : super(key: key);

  final Newsdetails newsdetail;

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 1,
      child: InkWell(
        splashColor: Colors.amber,
        onTap: (() {
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: ((context) => ArticalPage(
                        articalUrl: newsdetail.url,
                        image: newsdetail.imageurl,
                        title: newsdetail.title,
                      ))));
        }),
        child: Column(
          children: [
            Container(
                child: SizedBox(
              height: 200,
              child: CachedNetworkImage(
                  progressIndicatorBuilder: (context, url, progress) => Center(
                        child: (CircularProgressIndicator(
                          value: progress.progress,
                        )),
                      ),
                  imageUrl: newsdetail.imageurl,
                  fit: BoxFit.fitWidth),
            )).p2(),
            Center(
                child: Text(
              newsdetail.title,
              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
            ).p8())
          ],
        ),
      ),
    ).box.roundedLg.make().p8().px8();
  }
}
