import { motion } from "framer-motion";
import "./Categories.css";
import { Fade } from "react-awesome-reveal";

const Categories = () => {
  const catg = [
    {
      id: 1,
      name: "Male Fashion",
      title: "Discover Masculine Elegance",
      description:
        "From sharp suits to comfortable casual wear, find the perfect ensemble for any occasion. Explore our collection of high-quality clothing and accessories, curated for the modern gentleman. Redefine your style effortlessly with us ",
    },
    {
      id: 2,
      name: "Female Fashion",
      title: "Runway Radiance: Your Gateway to Exquisite Women's Fashion",
      description:
        "Elevate your style with our chic women's collection. Discover a range of trendy dresses, versatile tops, and stylish accessories that redefine fashion. Explore now for effortless sophistication.",
    },
    {
      id: 3,
      name: "Children Fashion",
      title: "Tiny Trendsetters: Fashion Fun for Little Ones",
      description:
        "Discover joyous children's fashion! From comfy everyday wear to charming outfits for special moments, find durable and delightful styles for your little ones. Explore our collection for smiles all around",
    },
  ];
  return (
    <div className="wrapper section-padding">
      <div className="flex flex-col gap-10 md:gap-20 md:text-xl">
        {/* PART 1 */}
        <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
          <div className="space-y-5 xl:col-span-3">
            {/* number part  */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="text-5xl md:text-9xl font-bold opacity-30"
              >
                Male Fashion
              </motion.p>
            </div>
            {/* title part  */}
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                className="text-3xl md:text-4xl font-semibold uppercase opacity-70"
              >
                <Fade delay={1e3} cascade damping={1e-1}>
                  Discover Masculine Elegance
                </Fade>
              </motion.h3>
            </div>
            {/* paragraph part 1 */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
              >
                From sharp suits to comfortable casual wear, find the perfect
                ensemble for any occasion. Explore our collection of
                high-quality clothing and accessories, curated for the modern
                gentleman. Redefine your style effortlessly with us
              </motion.p>
            </div>
            {/* paragraph part 2 */}
            {/* <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
              >
                we go beyond just offering a diverse range of high-quality
                products. We believe in providing a seamless and enriching
                shopping experience for our valued customers. That's why we
                offer a range of services designed to make your shopping journey
                more convenient, informative, and enjoyable
              </motion.p>
            </div> */}
          </div>

          <div className="xl:col-span-2 w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="w-full h-full"
            >
              <img
                src="https://i.ibb.co/1fFMqLh/qin-fan-Kfqg-Yzo-H3-Vk-unsplash.jpg"
                alt="Black and White Bicolor Cat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        {/* PART 2 */}
        <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
          <div className="order-1 xl:order-1 xl:col-span-2 w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="w-full h-full"
            >
              <img
                src="https://i.ibb.co/QdcT5ZJ/online-shopping-cart-e-commers-concept.jpg"
                alt="Customer Ordering Product"
                // width={900}
                width="100%"
                height={500}
                className="w-full h-full"
              />
            </motion.div>
          </div>
          <div className="space-y-5 xl:col-span-3 order-1 xl:order-2">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="text-7xl md:text-9xl font-bold opacity-30 xl:text-right"
              >
                Female Fashion
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                className="text-3xl md:text-5xl font-semibold uppercase xl:text-right"
              >
                Runway Radiance: Your Gateway to Exquisite Women's Fashion
              </motion.h3>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
                className="xl:text-right"
              >
                Elevate your style with our chic women's collection. Discover a
                range of trendy dresses, versatile tops, and stylish accessories
                that redefine fashion. Explore now for effortless
                sophistication.
              </motion.p>
            </div>
            {/* <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
                className="xl:text-center"
              >
                <ul className="steps steps-vertical  lg:steps-horizontal">
                  <li className="step step-primary">
                    Intuitive Order Tracking:
                  </li>
                  <li className="step step-secondary">
                    Responsive Customer Support:
                  </li>
                  <li className="step step-accent">
                    Effortless Returns and Refunds:
                  </li>
                  <li className="step step-info">
                    Instant Order Confirmation:
                  </li>
                  <li className="step step-success">
                    Customizable Notifications:
                  </li>
                </ul>
              </motion.p>
            </div> */}
          </div>
        </div>
        {/* PART 3 */}
        <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
          <div className="space-y-5 xl:col-span-3">
            {/* number part  */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="text-7xl md:text-9xl font-bold "
              >
                Children Fashion
              </motion.p>
            </div>
            {/* title part  */}
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                className="text-3xl md:text-4xl font-semibold uppercase opacity-70"
              >
                <Fade delay={1e3} cascade damping={1e-1}>
                  Tiny Trendsetters: Fashion Fun for Little Ones
                </Fade>
              </motion.h3>
            </div>
            {/* paragraph part 1 */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
              >
                Discover joyous children's fashion! From comfy everyday wear to
                charming outfits for special moments, find durable and
                delightful styles for your little ones. Explore our collection
                for smiles all around
              </motion.p>
            </div>
            {/* paragraph part 2 */}
            {/* <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }}
              >
                we go beyond just offering a diverse range of high-quality
                products. We believe in providing a seamless and enriching
                shopping experience for our valued customers. That's why we
                offer a range of services designed to make your shopping journey
                more convenient, informative, and enjoyable
              </motion.p>
            </div> */}
          </div>

          <div className="xl:col-span-2 w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="w-full h-full"
            >
              <img
                src="https://i.ibb.co/1fFMqLh/qin-fan-Kfqg-Yzo-H3-Vk-unsplash.jpg"
                alt="Black and White Bicolor Cat"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
