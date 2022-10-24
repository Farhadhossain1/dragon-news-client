import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BrandCarusel from '../BrandCarosuel/BrandCarusel';

const RightSideNav = () => {


    const {providerLogIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn =() =>{
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
                <ButtonGroup vertical>
                            <Button onClick={googleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Log In with google</Button>
                            <Button variant="outline-dark"><FaGithub></FaGithub> Log In with github</Button>
                </ButtonGroup>
                <div className='mt-4'>
                        <h4>Find us on</h4>
                        <ListGroup>

      <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>        
                </div>
                <div>
                    <BrandCarusel></BrandCarusel>
                </div>
        </div>
    );
};

export default RightSideNav;