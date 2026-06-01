import { Exo_2, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header/Header";
//swiper css
import "swiper/css";
import "swiper/css/navigation";
import Footer from "@/components/Layouts/Footer/Footer";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";
import Buttons from "@/components/Assets/Ui/Buttons/Buttons";
const titleFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-title",
});
const bodyFont = Exo_2({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Shivam Women and Children Hospital",
  description: "Shivam Women and Children Hospital",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shivam Hospital Basaveshwar Nagar",
    image: "https://www.shivam.care/images/home/about/hospital_photo.png",
    "@id": "",
    url: "https://www.shivam.care/",
    telephone: "9606028162",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Basaveshwar Nagar",
      addressLocality: "Bengaluru",
      postalCode: "560079",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9879576,
      longitude: 77.5374662,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: "https://www.shivam.care/",
  };
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Shivam Hospital Basaveshwar Nagar, Bangalore",
    url: "https://www.shivam.care/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.shivam.care/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function (w, d, s, u) {
      w.gbwawc = {
      url: u,
      options: {
              waId: "+919606028162",
              siteName: "Shivam Hospital",
              siteTag: "Usually reply in few minutes",
              siteLogo: "https://www.shivam.care/icon.png?e14c3b45319bb14e",
              widgetPosition: "LEFT",
              triggerMessage: "Chat Now",
              welcomeMessage: "Welcome to Shivam Hospital 😊",
         
              messageText: "Are you a ___?",
              replyOptions: ['Maternity',"Gynecology", "Paediatrics", "Fertility", "Orthopaedic"],
          },
      };
      var h = d.getElementsByTagName(s)[0],
      j = d.createElement(s);
      j.async = true;
      j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
      h.parentNode.insertBefore(j, h);
      })
      (window, document, "script", "https://waw.gallabox.com");

            `,
          }}
        />

        <Script
          id="Local Business Schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Script
          id="Local Business Schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PH2Q52J2');
;
    `,
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-JT9JNJVWL6`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JT9JNJVWL6');

            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `

            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1329902171865463');
fbq('track', 'PageView');


            `,
          }}
        />

        <title>
          Shivam Hospital | Best Hospital in Basaveshwarnagar, Bangalore
        </title>
        <meta
          name="description"
          content="Shivam Hospital is one of the best multispeciality hospitals in Basaveshwar Nagar, Bangalore. We provide world-class treatment to our patients."
        />

        <meta property="og:url" content="https://www.shivam.care/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shivam Hospital | Best Hospital in Basaveshwarnagar, Bangalore"
        />
        <meta
          property="og:description"
          content="Shivam Hospital is one of the best multispeciality hospitals in Basaveshwar Nagar, Bangalore. We provide world-class treatment to our patients."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/2a309392-00a0-4549-8c69-69214f4a3f3d.jpg?token=oWumohiHJqDRDzLRoO2fcaMyw2ZdNCiUtwb_7Yg9Vgs&height=630&width=1200&expires=33265674052"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shivam.care" />
        <meta property="twitter:url" content="https://www.shivam.care/" />
        <meta
          name="twitter:title"
          content="Shivam Hospital | Best Hospital in Basaveshwarnagar, Bangalore"
        />
        <meta
          name="twitter:description"
          content="Shivam Hospital is one of the best multispeciality hospitals in Basaveshwar Nagar, Bangalore. We provide world-class treatment to our patients."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/2a309392-00a0-4549-8c69-69214f4a3f3d.jpg?token=oWumohiHJqDRDzLRoO2fcaMyw2ZdNCiUtwb_7Yg9Vgs&height=630&width=1200&expires=33265674052"
        />
      </head>
      <body className={`${bodyFont.variable} ${titleFont.variable} `}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: (
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-PH2Q52J2"
                height="0"
                width="0"
                style="display: none; visibility: hidden;"
              />
            ),
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: (
              <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=1329902171865463&ev=PageView&noscript=1"
              />
            ),
          }}
        />
        <Header />
        {children}
        <Footer />
        <Buttons />
      </body>
    </html>
  );
}

//  <Image
//    src={"https://placehold.jp/1520x550.png"}
//    width={750}
//    height={400}
//    alt="Picture of the author"
//    className={styles.about_img}
//    style={{ objectFit: "cover" }}
//  />;
