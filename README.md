<h2> "TS'de undefined ve null nedir, aralarındaki fark nedir ?" araştırınız. </h2>
<ul>
  <li>TypeScript , Null ve Undefined gibi iki özel değere sahiptir. Her ikisi de herhangi bir değerin yokluğunu temsil eder. Null ve Undefined arasındaki fark ince ve kafa karıştırıcıdır.</li>
  <li>Undefined, değerin atanmadığı ve değerini bilmediğiniz anlamına gelir. Bu, kasıtsız bir değer eksikliğidir. Bir değişkenin bildirildiği ancak henüz bir değer atanmadığı anlamına gelir.</li>
  <li>Null, değişkenin bir değeri olmadığını bildiğinizi gösterir. Bu kasıtlı bir değer eksikliğidir. </li>
</ul>

<h2>  "HTTP request nedir, yapısı nedir, türleri nelerdir niçin kullanılır, http status kodları nelerdir, en sık kullanılan http status kodları hangileridir ?" araştırınız. </h2>
<ul>
  <li>HTTP, " hypertext transfer protocol" 'in kısaltmasıdır. Bu protokolü kullanarak istemci sunucuya bir istek gönderir ve isteğe bağlı olarak sunucu ve web tarayıcısı istemciye yanıt verir.</li>
  <h3> HTTP Request Yapısı </h3>
  <ul>
      <li> Her HTTP isteği üç öğe içerir : Request Line, Request Header, Request Body (isteğe bağlı).</li>
      <h4> Request Line </h4>
      <ul> 
        <li> Sunucuya bilgi veya kaynakla ne yapılacağını söyleyen yöntemi belirtir. </li>
        <li> Sunucudaki kaynağı bulmak için kullanılan isteğin URL'sini içerir. </li>
        <li> Ayrıca kullanılan HTTP protokolü sürümünü de belirtir (Ör. HTTP / 1.0 veya HTTP/1.1) </li>
      </ul>
      <h4> Request Header </h4>
      <ul> 
        <li> 0 veya daha fazla başlıktan oluşur. </li>
        <li> Sunucunun istemcinin isteğini kullanarak talep ettiği bilgilerle nasıl başa çıkacağını bilmesi için istek hakkında daha fazla bilgi iletmek için kullanılır. </li>
      </ul>
      <h4> Request Body </h4>
      <ul> 
        <li> Bu, sunucuya ek veri göndermek için kullanılan HTTP isteğinin isteğe bağlı bir parçasıdır. </li>
      </ul>
  </ul>
  <h3> HTTP Status Kodları </h3>
  <ul>
    <li> HTTP status kodu, bir web sitesinin sunucusunun bu isteğin yerine getirilip getirilemeyeceğini belirtmek için tarayıcıya gönderdiği bir mesajdır.</li>
  <table align="center">
  <tr>
    <th> Status Code </th>
    <th>  </th>
  </tr>
  <tr>
    <td> 200 </td>
    <td> OK </td>
  </tr>
  <tr>
    <td> 201 </td>
    <td> Created </td>
  </tr>
  <tr>
    <td> 400 </td>
    <td> Bad Request </td>
  </tr>
  <tr>
    <td> 401 </td>
    <td> Unauthorized </td>
  </tr>
  <tr>
    <td> 403 </td>
    <td> Forbidden </td>
  </tr>
  <tr>
    <td> 404 </td>
    <td> Not Found </td>
  </tr>
  <tr>
    <td> 500 </td>
    <td> Internal Server Error </td>
  </tr>
  <tr>
    <td> 502 </td>
    <td> Bad Gateway </td>
  </tr>
  <tr>
    <td> 503 </td>
    <td> Service Unavailable </td>
  </tr>
</table>
  </ul>
</ul>

<h2>  "TS'de interface nedir ?" araştırınız </h2>
<ul>
  <li> Typescript'te "interface" , derleyiciye belirli bir nesnenin hangi özellik adlarına sahip olabileceğini söyleyen soyut bir türdür. </li>
  <li> "Class"'ların izleyeceği "syntax" tanımlar. Bir "interface"'den türetilen "class"'lar, o "interface" tarafından sağlanan yapıyı izlemelidir. </li>
  <li> Typescript'teki "interface", bir "type" tanımlamak ve bunu "class" içerisinde uygulamak için kullanılabilir. </li>
  <li> TypeScript "interface", bir "function" türünü tanımlamak için de kullanılır. Bu, "function" imzasını sağlar.</li>
  <li> Bir "interface", dizin türünü ve değerleri tanımlayabileceğiniz bir dizinin türünü de tanımlayabilir. </li>
  <li> Bazen, fazla özelliklere sahip bir "interface" bildirebiliriz, ancak tüm nesnelerin verilen tüm "interface" özelliklerini tanımlamasını beklemeyebiliriz. </li>
</ul>

<h2>  "TS'de class (sınıf) ile object (nesne) arasındaki fark nedir ?" araştırınız. </h2>
<ul>
  <li> Bir sınıf, benzer nesnelerin veya varlıkların özelliklerini ve davranışlarını tanımlayan bir plandır. Her nesne, kendileriyle ilişkili özelliklere ve davranışlara sahip bir sınıfın bir örneğidir. </li>
  <li> Sınıflar tanımlandığında, bu sınıflar yalnızca bir kavram veya kullanıcı tanımlı veri türü olduğundan, bunlara bellek tahsis edilmez. Ancak, bu sınıfların nesnelerini oluşturduğumuzda, yığına bellek ayrılır. </li>
</ul>

<h2>  "IoC nedir, Dependency Injection nedir ?" araştırınız. </h2>
<ul>
  <li> Inversion of control (IOC), bir uygulamadaki kontrol akışını tersine çeviren bir programlama ilkesidir. </li>
  <li> Geleneksel prosedürel programlamada, programın yürütülmesini kontrol eden kod — main function — nesneleri başlatır, yöntemleri çağırır ve hatta yürütmenin devam edebilmesi ve programın görevini yerine getirebilmesi için kullanıcıdan girdi ister. </li>
  <li> IoC ile kullanıcı eylemlerini başlatan, yöntem çağıran ve tetikleyen, akış üzerinde tam kontrole sahip olan ve bu sorumluluğu ana işlevden ve sonuç olarak uygulamadan kaldıran bir çerçevedir. </li>
  <li> Dependency Injection, bağımlılıkların oluşturulmasının ve bağlanmasının bağımlı sınıfın dışında yapıldığı bir yazılım tasarım tekniğidir. </li>
  <li> temel olarak oluşturacağınız bir sınıf içerisinde başka bir sınıfın nesnesini kullanacaksanız new anahtar sözcüğüyle oluşturmamanız gerektiğini söyleyen bir yaklaşımdır. </li>
  <li> Bu sayede Loosely Coupled bir ilişki kurulmuş olur. </li>
</ul>

