import Block from "../common/block/Block"
import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const GetInTouch = () => {
  return (
    <div className="bg-light px-60">
        <Block title="Get in touch">
        <div className="flex flex-row justify-center gap-2 my-8 mx-40">
            <div className="w-40 bg-primary shadow p-10 flex flex-col gap-1">
                <div className="flex flex-row align-center gap-1">
                    <PlaceIcon fontSize="large"/>
                    <div>
                        <h4>Address</h4>
                        <p>Gurugram, Haryana</p>
                    </div>
                </div>
                <div className="flex flex-row align-center gap-1">
                    <ContactPhoneIcon fontSize="large"/>
                    <div>
                        <h4>Call</h4>
                        <p>+91 - 9997714831</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Email</h4>
                        <p>v.akhil.m@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="w-50"></div>
        </div>
    </Block>
    </div>
  )
}

export default GetInTouch