import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa
            aperiam sint laborum molestias nesciunt, optio doloribus quisquam ab
            nemo repellat deserunt nisi veniam nobis dicta est. Enim, itaque.
            Repudiandae.
          </p>
        </div>
        <img src={heroImg} alt='women and the browser' className='img' />
      </div>
    </section>
  );
};
export default Hero;
