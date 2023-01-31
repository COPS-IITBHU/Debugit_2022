class Area {
  late String areaName;
  late String areaImageUrl;
  late String urltoarea;
}

List<Area> getArea() {
  List<Area> myCategories = <Area>[];
  Area categorieModel;

  categorieModel = Area();
  categorieModel.areaName = "India";
  categorieModel.areaImageUrl = "lib/utils/images/India.jpg";
  categorieModel.urltoarea = "in";
  myCategories.add(categorieModel);

  categorieModel = Area();
  categorieModel.areaName = "USA";
  categorieModel.areaImageUrl = "lib/utils/images/usa.jpg";
  categorieModel.urltoarea = "us";
  myCategories.add(categorieModel);

  categorieModel = Area();
  categorieModel.areaName = "UK";
  categorieModel.areaImageUrl = "lib/utils/images/uk.jpg";
  categorieModel.urltoarea = "uk";
  myCategories.add(categorieModel);

  categorieModel = Area();
  categorieModel.areaName = "FRANCE";
  categorieModel.areaImageUrl = "lib/utils/images/france.jpg";
  categorieModel.urltoarea = "fr";
  myCategories.add(categorieModel);

  categorieModel = Area();
  categorieModel.areaName = "CANNADA";
  categorieModel.areaImageUrl = "lib/utils/images/cannada.jpg";
  categorieModel.urltoarea = "ca";
  myCategories.add(categorieModel);

  categorieModel = Area();
  categorieModel.areaName = "AUSTRALIA";
  categorieModel.areaImageUrl = "lib/utils/images/au.jpg";
  categorieModel.urltoarea = "au";
  myCategories.add(categorieModel);

  return myCategories;
}
