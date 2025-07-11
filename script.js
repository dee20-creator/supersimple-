<script>
  function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('show');
  }
</script>
<script>
  const topBtn = document.getElementById("topBtn");

  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>