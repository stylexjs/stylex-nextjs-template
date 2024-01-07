import Header from '../components/nav'
import Footer from '../components/footer'
import Card from '../components/card'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="stylex-text">
          Hello, <span className="gradient-text">StyleX</span>!
        </h1>
        <p>
          This is a template repository for StyleX, the styling system that
          powers instagram.com, facebook.com, whatsapp.com
        </p>
      </main>
      <div className="cardContainer">
        <Card
          title="Card 1"
          description="This is the description for Card 1."
          link="/"
        />
        <Card
          title="Card 2"
          description="This is the description for Card 2."
          link="/"
        />
        <Card
          title="Card 3"
          description="This is the description for Card 3."
          link="/"
        />
      </div>
      <Footer />
    </>
  )
}

export default Home
