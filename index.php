<!DOCTYPE HTML>
<html lang='ru'>
  <head>
    <title>Первый проект на bootstra 3</title>
    <meta content='text/html' charset='utf-8'>
    <link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,700italic,300,300italic,400italic,700' rel='stylesheet' type='text/css'>
    <link href='_/styles/style.min.css' rel='stylesheet' type='text/css'>
    <script src='_/javascripts/main.min.js' type='text/javascript'></script>
  </head>
  <body id='home'>
    <header>
      <?php include "_/views/layouts/header.php"; ?>
    </header>
    <div class='container'>
      <?php include "_/views/layouts/snippet_categories.php"; ?>
      <section class='col col-lg-3 main'>
        <?php include "_/views/layouts/aside_filter_categories.php"; ?>
        <?php include "_/views/layouts/aside_filter_fur.php"; ?>
        <?php include "_/views/layouts/aside_filter_size.php"; ?>
        <?php include "_/views/layouts/aside_filter_price.php"; ?>
        <?php include "_/views/layouts/aside_filter_color.php"; ?>
        <?php include "_/views/layouts/aside_filter_facing.php"; ?>
      </section>
      <section class='col col-lg-9 sidebar'>
        <?php include "_/views/layouts/snippet_showroom.php"; ?>
        <?php include "_/views/layouts/snippet_pages.php"; ?>
      </section>
      <?php include "_/views/layouts/footer.php"; ?>
    </div>
  </body>
</html>