import About from '@/components/about/About'
import About_Us from '@/components/about_us/About_Us'
import Banner from '@/components/banner/Banner'
import Blog from '@/components/blog/Blog'
import Contact from '@/components/contact/Contact'
import Counter from '@/components/counter/Counter'
import Experts from '@/components/experts/Experts'
import Offer from '@/components/offer/Offer'
import Partners from '@/components/partners/Partners'
import Projects from '@/components/projects/Projects'
import QNA from '@/components/qna/QNA'
import Testimonial from '@/components/testimonial/Testimonial'

export default function page() {
  return (
    <>
      <Banner />
      <About />
      <Offer />
      <QNA />
      <Experts />
      <About_Us />
      <Projects />
      <Contact />
      <Testimonial />
      <Counter />
      <Blog />
      <Partners />
      {/* <ScrollToTop smooth /> */}
    </>
  )
}
