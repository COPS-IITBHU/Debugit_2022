import 'dart:convert';

import 'package:http/http.dart' as http;
String c_url = "https://api.countrylayer.com/v2/all? access_key = 7feb2f26f2fd706b28a6c1e3d401c0ac";


class Countrydetails {
  late String imageurl, title,keyword;

  Countrydetails(
    {
      required this.title,
      required this.keyword,
      required this.imageurl,
      
    }
  );
}

class Country {
  List<Countrydetails> country = [];

  Future<void> getCountry() async {
    String url =
        'https://countriesnow.space/api/v0.1/countries/flag/images';

    var response = await http.get(Uri.parse(url));
    var jsonData = jsonDecode(response.body);
    
        jsonData["data"].forEach((element) {        
          Countrydetails countrydetails = Countrydetails(
              title: element["name"],
              keyword: element["iso2"].toString().toLowerCase(),
              imageurl: element["flag"]);
              country.add(countrydetails);
      });
    
  
      
    
  }
}
