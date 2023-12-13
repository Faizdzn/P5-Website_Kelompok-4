<script lang="ts">
  import $ from 'jquery'
  
  export default{
    data() {
      return {
        page: parseInt(this.$route.params.page),
        max_page: 7,
      }
    },
    mounted() {
      var page = this.page;
      
      $("#pagecount").html(`Page ${this.page}`);
      
      if(this.page > this.max_page) {
        window.location.href ="#/"
      } else {
        var page_json = this.page-1;
        const json_page =
        [
          {
            page: 1,
            value: `      <div class="d-flex flex-column" id="blog_container"><h2 id="pendahuluan">Pendahuluan</h2><hr>
<p><img id="blog_img" src="https://cdn.discordapp.com/attachments/1100474575873134633/1184137477032775731/IMG-20231212-WA0037.jpg?ex=658ae0f6&amp;amp;is=65786bf6&amp;amp;hm=89dd985668f109603b961df461a80af7e750076936bf5172b6d2f0407742cc4b&amp;amp;" alt="kencur1" style="text-decoration: underline;"></p>
<h4 id="asal-usul-kencur">Asal-usul Kencur</h4>
<p>Kencur tanaman ini diperkirakan berasal dari daerah Asia tropika. Sebagian kalangan menduga bahwa asal-usul kencur adalah dari kawasan indo-malaysia . Tetapi sumber literatur lainya memastikan bahwa asal tanaman kencur adalah dari india.</p>
<h4 id="sejarah-kencur">Sejarah Kencur</h4>
<p>Sejarah penggunaan kencur dapat ditelusuri kembali ribuan tahun di Asia Tenggara, terutama di Indonesia. Tanaman ini memiliki peran penting dalam pengobatan tradisional dan kuliner.</p>
<h4 id="nama-lain-kencur">Nama Lain Kencur</h4>
<p>Kencur mempunyai nama panggilan yang berbeda pada setiap wilayah, salah satunya yaitu Kencor Madura, Sukung Manado, kencur Jawa, dan lain-lainnya. Kencur sendiri mempunyai nama latin atau ilmiah Kaempferia galanga.</p></div>`,
          },
          {
            page: 2,
            value: `<div class="d-flex flex-column" id="blog_container"><h2 id="deskripsi-tanaman-kencur">Deskripsi Tanaman Kencur</h2><hr>
<p><img id="blog_img" src="https://cdn.discordapp.com/attachments/1100474575873134633/1184137391804530698/IMG-20231212-WA0036.jpg?ex=658ae0e2&amp;amp;is=65786be2&amp;amp;hm=1f09e5c103405a9ee5654abe49bb954674a6f74ae1f6b82afbea1c3d291c0b57&amp;amp;" alt="kencur2" style="text-decoration: underline;"></p>
<p><strong>Kencur (Kaempferia galanga)</strong> adalah <em>tanaman herbal tropis dengan rimpang berwarna cokelat kemerahan dan daun hijau lebar</em>. Digunakan dalam masakan dan pengobatan tradisional di Asia Tenggara, kencur memiliki aroma harum dan rasa pedas. Bunga putih atau ungu muncul di bagian tengah tanaman yang tumbuh baik di daerah lembab.</p></div>`
          },
          {
            page: 3,
            value: `<div class="d-flex flex-column" id="blog_container"><h2 id="manfaat-kencur">Manfaat Kencur</h2><hr>
<h4 id="1-kesehatan-pencernaan">1. Kesehatan Pencernaan:</h4>
<ul>
<li>Membantu meredakan masalah pencernaan seperti perut kembung dan mual.</li>
<li>Memiliki sifat antiinflamasi yang bermanfaat bagi kesehatan pencernaan.</li>
</ul>
<h4 id="2-peningkatan-nafsu-makan">2. Peningkatan Nafsu Makan:</h4>
<ul>
<li>Dipercaya dapat meningkatkan nafsu makan, terutama dalam pengobatan tradisional.</li>
</ul>
<h4 id="3-kesehatan-pernapasan">3. Kesehatan Pernapasan:</h4>
<ul>
<li>Digunakan untuk meredakan masalah pernapasan seperti batuk dan pilek.</li>
<li>Sifat ekspektoran kencur membantu membersihkan saluran pernapasan.</li>
</ul>
<h4 id="4-antioksidan-dan-antiinflamasi">4. Antioksidan dan Antiinflamasi:</h4>
<ul>
<li>Mengandung senyawa antioksida</li>
</ul></div>`
          },
          {
            page: 4,
            value: `<div class="d-flex flex-column" id="blog_container"><h2 id="cara-menanam-tanaman-kencur">Cara Menanam Tanaman Kencur</h2>
<hr>
<h4 id="1-persiapan-lahan">1. Persiapan Lahan:</h4>
<ul>
<li>Pilih lokasi dengan sinar matahari cukup dan tanah yang lembab.</li>
<li>Pastikan tanah memiliki drainase yang baik untuk menghindari genangan air.</li>
</ul>
<h4 id="2-pemilihan-bibit">2. Pemilihan Bibit:</h4>
<ul>
<li>Pilih rimpang kencur yang sehat dan bebas dari penyakit.</li>
<li>Dapatkan rimpang dari sumber yang terpercaya.</li>
</ul>
<h4 id="3-teknik-penanaman">3. Teknik Penanaman:</h4>
<ul>
<li>Tanam rimpang kencur dengan kedalaman 5-7 cm.</li>
<li>Jaga jarak tanam antar-rimpang sekitar 20-30 cm.</li>
</ul>
<h4 id="4-perawatan-awal">4. Perawatan Awal:</h4>
<ul>
<li>Siram tanaman secara teratur untuk menjaga kelembaban tanah.</li>
<li>Berikan pupuk organik ringan untuk mendukung pertumbuhan awal.</li>
</ul>
<h4 id="5-pemeliharaan-lanjutan">5. Pemeliharaan Lanjutan:</h4>
<ul>
<li>Bersihkan area tanam dari rumput dan gulma.</li>
<li>Berikan pupuk seimbang secara berkala selama periode pertumbuhan.</li>
</ul>
<h4 id="6-penyiraman-dan-drainase">6. Penyiraman dan Drainase:</h4>
<ul>
<li>Lakukan penyiraman teratur, terutama pada musim kering.</li>
<li>Pastikan tanah memiliki sistem drainase yang baik.</li>
</ul>
<hr>
<h2 id="catatan-penting">Catatan Penting:</h2>
<ul>
<li>Baca panduan tanam yang spesifik untuk varietas kencur yang Anda pilih.</li>
<li>Konsultasikan dengan ahli pertanian setempat untuk rekomendasi yang sesuai dengan kondisi tanah di wilayah Anda.</li>
</ul></div>`
          },
          {
            page: 5,
            value: `<div class="d-flex flex-column" id="blog_container"><h2 id="cara-merawat-tanaman-kencur">Cara Merawat Tanaman Kencur</h2>
<p><img id="blog_img" src="https://cdn.discordapp.com/attachments/1100474575873134633/1184137392014237849/IMG-20231212-WA0035.jpg?ex=658ae0e2&amp;amp;is=65786be2&amp;amp;hm=ca26eab74bd8b546c532e443c8022917ce9670a23e28d00d3f5691563cbbd38f&amp;amp;" alt="kncr" style="text-decoration: underline;"></p>
<hr>
<h4 id="1-penyiraman">1. Penyiraman:</h4>
<ul>
<li>Jaga kelembaban tanah, hindari genangan air.</li>
</ul>
<h4 id="2-pemupukan">2. Pemupukan:</h4>
<ul>
<li>Berikan pupuk seimbang secara berkala.</li>
</ul>
<h4 id="3-pembersihan-dan-pencegahan-hama">3. Pembersihan dan Pencegahan Hama:</h4>
<ul>
<li>Bersihkan area tanam, awasi tanda-tanda hama atau penyakit.</li>
</ul>
<h4 id="4-perlindungan-dari-sinar-matahari">4. Perlindungan dari Sinar Matahari:</h4>
<ul>
<li>Berikan naungan ringan saat terlalu panas.</li>
</ul>
<h4 id="5-pemeliharaan-drainase">5. Pemeliharaan Drainase:</h4>
<ul>
<li>Pastikan tanah memiliki drainase yang baik.</li>
</ul>
<h4 id="6-pemangkasan">6. Pemangkasan:</h4>
<ul>
<li>Pemangkasan daun tua untuk sirkulasi udara.</li>
</ul>
<h4 id="7-panen-yang-tepat">7. Panen yang Tepat:</h4>
<ul>
<li>Gali rimpang setelah 8-10 bulan.</li>
</ul>
<h4 id="8-perawatan-musim-dingin-jika-perlu">8. Perawatan Musim Dingin (jika perlu):</h4>
<ul>
<li>Berikan perlindungan ekstra pada musim dingin.</li>
</ul>
<p><em>Perhatikan dan sesuaikan dengan kondisi tanaman dan lingkungan setempat.</em></p></div>`
          },
          {
            page: 6,
            value: `<div class="d-flex flex-column" id="blog_container"><h2 id="penyakit-pada-tanaman-kencur">Penyakit pada Tanaman Kencur:</h2>
<p><img id="blog_img" src="https://cdn.discordapp.com/attachments/1100474575873134633/1184137477032775731/IMG-20231212-WA0037.jpg?ex=658ae0f6&amp;amp;is=65786bf6&amp;amp;hm=89dd985668f109603b961df461a80af7e750076936bf5172b6d2f0407742cc4b&amp;amp;" alt="dididi" style="text-decoration: underline;"></p>
<h4 id="1-busuk-akar">1. Busuk Akar:</h4>
<ul>
<li>Penyebab: Kelebihan air atau drainase yang buruk.</li>
<li>Pencegahan: Pastikan tanah memiliki sistem drainase yang baik.</li>
</ul>
<h4 id="2-penyakit-daun">2. Penyakit Daun:</h4>
<ul>
<li>Penyebab: Jamur atau bakteri.</li>
<li>Pencegahan: Pemeliharaan kebersihan, hindari kelembaban berlebih pada daun.</li>
</ul>
<h4 id="3-penyakit-umbi">3. Penyakit Umbi:</h4>
<ul>
<li>Penyebab: Serangan jamur atau bakteri pada rimpang.</li>
<li>
<p>Pencegahan: Pastikan rimpang kencur bersih sebelum penanaman, hindari kelembaban berlebih.</p>
</li>
</ul>
<hr>
<h2 id="hama-pada-tanaman-kencur">Hama pada Tanaman Kencur:</h2>
<p><img id="blog_img" src="https://cdn.discordapp.com/attachments/1100474575873134633/1184137391804530698/IMG-20231212-WA0036.jpg?ex=658ae0e2&amp;amp;is=65786be2&amp;amp;hm=1f09e5c103405a9ee5654abe49bb954674a6f74ae1f6b82afbea1c3d291c0b57&amp;amp;" alt="eeeeee" style="text-decoration: underline;"></p>
<h4 id="1-ulat-tanah">1. Ulat Tanah:</h4>
<ul>
<li>Gejala: Daun yang dimakan dan lubang di tanah.</li>
<li>Pengendalian: Gunakan insektisida organik, pertahankan kebersihan tanah.</li>
</ul>
<h4 id="2-kutu-daun">2. Kutu Daun:</h4>
<ul>
<li>Gejala: Daun yang menguning dan keriting.</li>
<li>Pengendalian: Siram tanaman dengan air, gunakan insektisida jika diperlukan.</li>
</ul>
<h4 id="3-tikus-tanah">3. Tikus Tanah:</h4>
<ul>
<li>Gejala: Rongga atau lubang di sekitar rimpang.</li>
<li>Pengendalian: Gunakan metode perlindungan tanaman, seperti pagar bawah tanah.</li>
</ul>
<h4 id="4-nematoda">4. Nematoda:</h4>
<ul>
<li>Gejala: Pertumbuhan tanaman terhambat.</li>
<li>Pengendalian: Pertahankan rotasi tanaman, gunakan pupuk organik.</li>
</ul>
<h2 id="tips-pencegahan-umum">Tips Pencegahan Umum:</h2>
<ul>
<li>Jaga kebersihan area tanam.</li>
<li>Hindari penumpukan air atau genangan.</li>
<li>Gunakan pupuk organik untuk meningkatkan ketahanan tanaman.</li>
<li>Periksa tanaman secara teratur untuk mendeteksi masalah sejak dini.</li>
</ul></div>`
          },
          {
            page: 7,
            value: `<div class="d-flex flex-column" id="blog_container"><h2 id="kesimpulan">Kesimpulan</h2><hr>
<p><strong>Tanaman kencur</strong> adalah <em>tanaman herbal Asia Tenggara yang memiliki nilai kuliner dan kesehatan</em>. Dikenal dalam masakan dan obat tradisional, kencur membutuhkan perawatan seperti penyiraman teratur dan pemupukan. Namun, rentan terhadap penyakit dan hama, sehingga perlu pencegahan yang cermat. Manfaatnya melibatkan peningkatan nafsu makan dan kesehatan pencernaan. Kesimpulannya, kencur adalah tanaman multifungsi yang membutuhkan perhatian dalam pertanian untuk hasil yang optimal.</p></div>`
          },
        ];
        
        $("#res_page").empty();
        $("#res_page").html(json_page[page_json]['value']);
      }
     
      if(this.page == 1) {
        $("#pageprev").attr("style", "display: none;");
      } 
      
      if (this.page == this.max_page) {
        $("#pagenext").attr("style", "display: none;");
      }
      
      $("#pagenext").on("click", function(e){
        page++;

        window.location.href = `#/kencur/${page}`;
        window.location.reload();
      });
      
      $("#pageprev").on("click", function(e){
        if(page != 1) {
          page--;
        }

        window.location.href = `#/kencur/${page}`
        window.location.reload();
      });
    }
  }
</script>
<template>
  <div class="d-flex flex-column jc-center p-20">
    <div class="d-flex flex-column jc-center p-20 pb" id="res_page">
      <div class="d-flex flex-column" id="blog_container"><h2 id="pendahuluan">Pendahuluan</h2>
<p><img id="blog_img" src="https://cdn.discordapp.com/attachments/1100474575873134633/1184137477032775731/IMG-20231212-WA0037.jpg?ex=658ae0f6&amp;amp;is=65786bf6&amp;amp;hm=89dd985668f109603b961df461a80af7e750076936bf5172b6d2f0407742cc4b&amp;amp;" alt="kencur1" style="text-decoration: underline;"></p>
<h4 id="asal-usul-kencur">Asal-usul Kencur</h4>
<p>Kencur tanaman ini diperkirakan berasal dari daerah Asia tropika. Sebagian kalangan menduga bahwa asal-usul kencur adalah dari kawasan indo-malaysia . Tetapi sumber literatur lainya memastikan bahwa asal tanaman kencur adalah dari india.</p>
<h4 id="sejarah-kencur">Sejarah Kencur</h4>
<p>Sejarah penggunaan kencur dapat ditelusuri kembali ribuan tahun di Asia Tenggara, terutama di Indonesia. Tanaman ini memiliki peran penting dalam pengobatan tradisional dan kuliner.</p>
<h4 id="nama-lain-kencur">Nama Lain Kencur</h4>
<p>Kencur mempunyai nama panggilan yang berbeda pada setiap wilayah, salah satunya yaitu Kencor Madura, Sukung Manado, kencur Jawa, dan lain-lainnya. Kencur sendiri mempunyai nama latin atau ilmiah Kaempferia galanga.</p></div>
    </div>
    <div class="d-flex jc-center ai-center mt-10 pb p-20" id="bottom_nav">
          <button id="pageprev" class="btn white-btn mr-15 ml-15"><i class="fas fa-arrow-left"></i></button>
          <span id="pagecount" class="ai-center">Page 1</span>
          <button id="pagenext" class="btn white-btn mr-15 ml-15"><i class="fas fa-arrow-right" disabled="false"></i></button>
        </div>
  </div>
</template>