import Header from "./components/Header"
import Article from "./components/Article"
import Footer from "./components/Footer"

const posts = [

  {

    title: "On the Street in Brooklyn",
    date: "07-15-2026",
    dateLabel: "July 15, 2026",
    imgSrc: "./images/blog-image-1.jpg",
    imgAlt: "Woman in bright-orange dress looking down at her shoes",

    text: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
  
    fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
  
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
  
    fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Quisque
    
    faucibus ex sapien vitae pellentesque sem placerat. Iaculis massa nisl malesuada lacinia integer nunc posuere.`,

    relatedTitles: ["Sample Title 1", "Sample Title 2"]

  },

  {

    title: "Vintage in Vogue",
    date: "July 6 2026",
    dateLabel: "July 6, 2026",
    imgSrc: "./images/blog-image-2.jpg",
    imgAlt: "3 models behind-the-scene observing fashion activities",

    text: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
  
    fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
  
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
  
    fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Quisque
    
    faucibus ex sapien vitae pellentesque sem placerat. Iaculis massa nisl malesuada lacinia integer nunc posuere.`,

    relatedTitles: ["Sample Title 1", "Sample Title 2"],

  },

]

function App() {
  
  return (
    <>

      <Header />
      <main>

        {posts.map((post, index) => (

          <Article key={index} {...post} />

        )

        )}

      </main>
      <Footer />

    </>
  )
}

export default App
