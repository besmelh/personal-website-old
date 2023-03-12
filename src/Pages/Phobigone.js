import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Divider from '../Components/Divider';
import DevProjectSection from '../Components/DevProjectSection';
import { motion } from 'framer-motion';
import ScrollToTop from '../Components/ScrollToTop';
import PlanetDisplay from '../Components/PlanetDisplay';
import PlanetDisplay_Phobigone from '../Components/PlanetDisplay_Phobigone';

function Phobigone(props) {
  const transition = { duration: 0.5, type: 'spring' };

  const { imageDetails, ...other } = props;
  const src =
    'https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/apps-planet.glb?v=1642024423999';

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      className='Phobigone'
    >
      <ScrollToTop>
        <Header stars>
          <motion.div
            initial={{ width: imageDetails.width, height: imageDetails.height }}
            transition={transition}
            className='icon'
          >
            <PlanetDisplay_Phobigone />
          </motion.div>

          <motion.div initial={{ opacity: 0 }}>
            <h2>Phobigone</h2>
            <h4>
              Below are some of the iOS apps I made with Swift, and VR projects
              made with Unity.
            </h4>
          </motion.div>
        </Header>

        <motion.div initial={{ opacity: 0 }}>
          <Content>
            {/* ********* phobigone ********* */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
            </p>
          </Content>
        </motion.div>
      </ScrollToTop>
    </motion.div>
  );
}

export default Phobigone;
