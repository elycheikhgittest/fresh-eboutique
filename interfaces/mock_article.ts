interface IArticleIndb {
  id: number;
  categorie: number;
  subcategorie: number;
  lieu: number;
  desc: string;
  prix: number;
  dateAdd: string;
}
interface IArticle {
  categorie: number;
  subcategorie: number;
  lieu: number;
  desc: string;
  prix: number;
  dateAdd: string;
}

export class ArticlStore {
  articles: IArticleIndb[] = [];
  id = 0;

  crateOneArticle(article: IArticle) {
    this.id++;
    this.articles.push({ ...article, id: this.id });
    console.log("article created");
  }

  crealeAllMockedArticles() {
    //1
    this.crateOneArticle({
      categorie: 0,
      subcategorie: 0,
      lieu: 0,
      desc: `
      منزل من خمسة غرف بمقاطعة دار النعيم غير بعيد من فيراج ول ابادو ومساحة القطعة:300 م2
      
      `,
      prix: 320000,
      dateAdd: "23-4-2022",
    });

    //2
    this.crateOneArticle({
      categorie: 0,
      subcategorie: 1,
      lieu: 1,
      desc: `
      قطعة ارضية 20م في 30م في سانتر امتير في تفرغ زينه قريب من ليلتي للحفلات
      
      `,
      prix: 1600000,
      dateAdd: "24-4-2022",
    });

    //3
    this.crateOneArticle({
      categorie: 1,
      subcategorie: 1,
      lieu: 1,
      desc: `
      هاتف سامسونج في حالة جيدة و مستخدم قليلا ذاكرته 1 جيكا
      `,
      prix: 3000,
      dateAdd: "25-3-2022",
    });

    //4
    this.crateOneArticle({
      categorie: 1,
      subcategorie: 2,
      lieu: 1,
      desc: `
      شقة للايجار مكونة غرفتين و صالون بمساحة 15م في 12م
      `,
      prix: 4000,
      dateAdd: "26-4-2022",
    });

    //5
    this.crateOneArticle({
      categorie: 1,
      subcategorie: 2,
      lieu: 1,
      desc: `
      منزل جديد ونضيف مكون من 4 غرف وصالون
      قرين من كرفور سيت اسمار
      في مساحة 30م في 20م
      `,
      prix: 12000,
      dateAdd: "25-4-2022",
    });

    //6
    this.crateOneArticle({
      categorie: 2,
      subcategorie: 0,
      lieu: 1,
      desc: `
      ابحث عن منزل للبيع في في صكوك غير بعيد من بقالة اتاك الخير
      `,
      prix: 0,
      dateAdd: "12-5-2022",
    });

    //7
    this.crateOneArticle({
      categorie: 2,
      subcategorie: 0,
      lieu: 2,
      desc: `
      ابحث عن قطعة ارضية للبيع في موديل ل
      `,
      prix: 0,
      dateAdd: "23-4-2022",
    });
  }

  InitArticles() {
    this.crealeAllMockedArticles();
    this.crealeAllMockedArticles();
    this.crealeAllMockedArticles();
  }
}
