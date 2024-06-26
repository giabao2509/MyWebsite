<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    function kiemtrasonguyento(n) {
      if (n <= 1) {
        return false; //n=1 ko phai la so nguyen to
      }
      for (let i = 2; i * i <= n; i++) {
        // thuc hien cac bc b1: i = 2 => 2 * 2 = 4 <= n (b2: neu n % 4 = 0 ko phai so nguyen to
        if (n % i == 0) {
          return false;
        }
      }
      return true; // nguoc lai 2 dieu kien tren la so nguyen to
    }
    function demsonguyento(n) {
      let dem = 0;
      let primes = [];
      for (let i = 2; i <= n; i++) {
        if (kiemtrasonguyento(i)) {
          //de quy
          primes.push(i);// neu de quy kiemtrasonguyento la true la (i) la so nguyen to thi them vao primes
          dem++;// dong thoi tang bien dem 
        }
      }
      console.log(`${dem}`, primes);
    }
  </script>
</html>