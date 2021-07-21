let soruJSON = {
    "baslik": "Hakimlik Deneme Testi 1",
    "sorular": [
        {
            "soru": "A, uzun zamandır öldürmeyi düşündüğü eşi B' nin çayına zehir zannederek saf su koyar. Buna göre aşağıdakilerden hangisi doğrudur?",
            "A": "Aracın elverişsizliği nedeiyle işlenemez suçtur",
            "B": "İnsan öldürmeye teşebbüstür",
            "C": "Maddi konun yokluğu nedeniyle işlenemez suçtur",
            "D": "Faile her ne kadar ceza verilmese de güvenlik tedbiri uygulanır",
            "Cevap": "A"
        },
        {
            "soru": "Antalya’da mobilya işleriyle uğraşan (B), son dönemde işlerinin kötüleşmesi sebebiyle ekonomik sıkıntılar yaşamaktadır. Kendisine karşı takip işlemleri yapılabileceğini düşünen (B), malları üzerinde birtakım işlemlerde bulunmuştur. (B)’den 300.000 TL alacağı olan (A), alacağının ödenmemesi üzerine ilamsız icra yoluyla takibe başlamış ve söz konusu takip kesinleşmiştir. Borç için hacze gidilmiş ancak haczedilebilecek hiçbir mal bulunmaması sebebiyle yalnızca bir haciz tutanağı düzenlemekle yetinilmiştir. (B)’nin mallarını kaçırdığını düşünen (A)’nın avukatı (V), iptal davası açmayı düşünmektedir. (B)’nin henüz vadesi gelmemiş olan 50.000 TL tutarındaki borcuna karşılık, borcun tamamı için bir ibraname almak suretiyle yapmış olduğu 35.000 TL tutarındaki ödeme için iptal davası açılabilir mi?",
            "A": "İİK m. 278, ivazsız tasarrufların iptaline ilişkindir. Buna göre, borçlunun neseben ya da sıhren üçüncü dereceye kadar yakınlarıyla yapmış olduğu tasarruflar da, ivazlı dahi olsa, bu kapsamda değerlendirilir. Nitekim kanun koyucu açıkça bu ivazlı tasarrufların bağışlama gibi iptale tabi olacağını kabul etmiştir. Bu tasarrufların iptale tabi olması bakımından alacaklıya zarar verme kastının bulunup bulunmaması veya borçlunun kötü niyetli olması şartı aranmaz. Somut olayda her ne kadar satış değeri, malın değerine göre gerçeğe uygun olsa da, sözleşmenin tarafı baldızı (B) olduğundan, tasarruf mutlak şekilde iptale tabidir.",
            "B": "Borçlunun hiçbir malı bulunmadığına dair mal beyanında bulunması, geçici veya kesin aciz belgesi hükmünde kabul edilemez. Nitekim takip başlatılmış ise de, henüz borçlunun malvarlığı değerlerine ilişkin herhangi bir araştırma yapılmamış; haciz talebinde bulunulmamıştır. Bu nedenle yalnızca bu beyana dayanarak borçlunun üçüncü kişilerle gerçekleştirdiği tasarrufların iptali yoluna başvurulması mümkün değildir.",
            "C": "Aciz belgesi, iptal davası için özel bir dava şartı olduğundan ve mahkemece re’sen gözetilmesi gerekeceğinden, bu nitelikte bir belge bulunmadığını tespit eden mahkemenin, davacıya kesin süre vermesi, bu süre içerisinde dava açmaya elverişli bir belge sunulmaması halinde ise davayı usulden reddetmesi gerekir. Ancak mahkeme eksikliği fark etmeden davaya devam etmiş ve davacı da hükümöncesinde belgeyi dosyaya ibraz etmişse, artık dava usulden reddedilmez; nitekim hüküm anına kadar eksiklik tamamlanmış bulunmaktadır.",
            "D": "İİK m. 279/3 uyarınca, aciz halinde bulunan borçlunun vadesi gelmemiş borçları için yaptığı ödemeler iptale tabidir. Anlaşma suretiyle borçta indirime gidilmesi, yani kısmen ibrada bulunulması söz konusu dahi olsa, bu husus tasarrufun iptal edilmesini engellemez. Vadesi gelmeden ödenen borcun, hacizden, haczedilecek mal bulunmaması nedeniyle acizden ya da iflasın açılmasından önce vadesi gelmiş olsa dahi, tasarruf iptale konu olacaktır.",
            "Cevap": "B"
        }
    ]
}

let soruKismi = document.getElementById("soru_kismi");
let a = document.getElementById("label-a");
let b = document.getElementById("label-b");
let c = document.getElementById("label-c");
let d = document.getElementById("label-d");

let sorular = soruJSON["sorular"]

let index = 0;

function soru_yazdir(){

  soruKismi.innerHTML = sorular[index].soru
  a.innerHTML = sorular[index].A
  b.innerHTML = sorular[index].B
  c.innerHTML = sorular[index].C
  d.innerHTML = sorular[index].D

}


function gec(){

  temizle();
  
  if(index == sorular.length -1){
    document.getElementById("gec").style.display = "none";
    return;
  }
  index = index + 1;
  if(index == sorular.length -1){
    let gecButon = document.getElementById("gec");
    gecButon.innerHTML = "Bitir";
  }

  
  soru_yazdir()
  
}

function temizle(){
  document.getElementById("a").checked = false;
  document.getElementById("b").checked = false;
  document.getElementById("c").checked = false;
  document.getElementById("d").checked = false;
}


// Main
soru_yazdir()

