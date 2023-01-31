import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shuddha_samachar/widgets/drawer.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ArticalPage extends StatefulWidget {
  const ArticalPage(
      {Key? key,
      required this.articalUrl,
      required this.image,
      required this.title})
      : super(key: key);
  final String articalUrl, image, title;

  @override
  State<ArticalPage> createState() => _ArticalPageState();
}

class _ArticalPageState extends State<ArticalPage> {
  final Completer<WebViewController> completer = Completer<WebViewController>();
  @override
  void initState() {
    super.initState();
    _loading = false;
    // Enable virtual display.
    WebView.platform = AndroidWebView();
  }

  bool _loading = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        foregroundColor: Colors.black,
        backgroundColor: Colors.white,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            "शुद्ध ".text.amber500.xl2.bold.make(),
            "SAMACHAR".text.purple900.xl3.extraBold.make(),
            const Icon(
              CupertinoIcons.news,
              color: Colors.white,
              size: 40,
            ).px12(),
          ],
        ),
      ),
      body: _loading
          ? const LinearProgressIndicator()
          : Container(
              child: WebView(
                initialUrl: widget.articalUrl,
              ),
            ),
      drawer: const MyDrawer(),
    );
  }
}
