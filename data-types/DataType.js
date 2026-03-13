//?Literals: kodun içine yazdıgm gercek degerdir.
//*bu mesela url kısmında page=10 diyip url in içinde direkt 10 demek yerıne page getirerek soyledim

/* JavaScript'te her verinin bir "türü" vardır ve literaller bu türleri oluşturmanın en kestirme yoludur. Literalleri, bilgisayarın hafızasında farklı şekillerde yer kaplayan "kutular" gibi düşünebiliriz. Bazı kutular sadece tek bir basit değer (sayı veya metin gibi) taşırken, bazıları daha karmaşık yapıları (bir liste veya bir nesne gibi) bir arada tutar.*/ 

//ESCAPING
// Kullanıcı şunu yazdı: He said "don't stop!" in his blog
// Bunu JSON ile API'ye gönderirken sorun çıkar mı?

// ✅ JSON.stringify otomatik halleder
/* const blogData = {
  title: `He said "don't stop!" in his blog`, // backtick ile sorunsuz
  content: content,
};
await axiosWithToken.post("/blogs/", blogData) */; // axios zaten serialize eder



let room1="confrenece_room"
 let currentRoom=room1 
 console.log(currentRoom); 



//? Data Types in JavaScript
//?1.Primitive Types and Object Types
/* number,string ,boolean,null,undefined,symbol*/

let str="hello"
str="world"

console.log(str);
const multiline="line1\nline2"
console.log(multiline);

const multi=`line1
line2
line3`
console.log(multi);
let currenttemp=25;
const m='Current temperature:\n' + `\t${currenttemp}\u00B0C\n` + "Don't worry about the weather!"
console.log(m);

//?symnbol JavaScript'te Symbol, her oluşturulduğunda tamamen benzersiz (unique) olan bir ilkel (primitive) veri türüdür.Fonksiyonun içine yazdığın metin ("the color of sunset") sadece o sembolü tanımlayan bir etikettir; sembolün kendisine bir değer katmaz veya benzersizliğini değiştirmez.eri Serileştirme (JSON) — JSON.stringify() yapıldığında sembollerin neden kaybolduğunu ve bunun veri güvenliği için neden önemli olduğunu inceleyelim mi? 🔐

/* Ama aynı zamanda 1. Gizli Metadata konusuyla da doğrudan bağlantılı — çünkü bir sembol anahtarı JSON.stringify() sırasında otomatik olarak dışarı sızmıyorsa, bu onu metadata saklamak için ideal yapıyor. */
const red=Symbol()
const orange=Symbol("the color of sunset")
red===orange


const blogPost = {
  title: "JavaScript Sembolleri",
  author: "Ahmet"
};

// Analytics modülü kendi id'sini ekliyor
const analyticsModule = (post) => {
  post.id = "analytics-001";
};

const cmsModule = (post) => {
  post.id = "cms-xyz-99";  // ← ÇAKIŞMA!
};


analyticsModule(blogPost);
cmsModule(blogPost);

console.log(blogPost.id)