import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import './index.css';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

//////////////////////////////////////////////////////////////////////////

  const track = document.getElementById("image-track");

  const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
  
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
  }
  
  const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track.dataset.percentage = nextPercentage;
    
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }
  
  window.onmousedown = e => handleOnDown(e);
  
  window.ontouchstart = e => handleOnDown(e.touches[0]);
  
  window.onmouseup = e => handleOnUp(e);
  
  window.ontouchend = e => handleOnUp(e.touches[0]);
  
  window.onmousemove = e => handleOnMove(e);
  
  window.ontouchmove = e => handleOnMove(e.touches[0]);

///////////////////////////////////////////////////////////////////////////

  // function togglePopup() {
  //   document.getElementById("popup-1").classList.toggle("active");
  // }

  // <div className="popup" id="popup-1">
  //       <div className="overlay"></div>
  //       <div className="content">
  //         <div className="close-btn" onClick={togglePopup}>X</div>
  //       </div>
  //       <h1>+7 attack next fight</h1>
  //     </div>

  return (
    <Box m="20px">
      <Header title="Boss list" subtitle="All bosses" />

      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          <img class="image" src="https://img.playstationtrophies.org/images/monthly_2022_02/review/elden-ring-dragon_626649ca-9bd7-413e-b484-4b99ab2b8970.jpg" draggable="false" />
          <img class="image" src="https://c4.wallpaperflare.com/wallpaper/678/658/534/digital-art-creature-giant-birds-wallpaper-preview.jpg" draggable="false" />
          <img class="image" src="https://s1.1zoom.me/b5050/815/266397-blackangel_1920x1080.jpg" draggable="false" />
          <img class="image" src="https://i.pinimg.com/736x/89/11/bc/8911bc2e7dfce0da05b869032d3d16af--monster-design-creature-concept.jpg" draggable="false" />
          <img class="image" src="https://i.pinimg.com/originals/4f/95/b5/4f95b5899dfc926439a058a8d5ea76ed.jpg" draggable="false" />
          <img class="image" src="https://images.alphacoders.com/902/902674.jpg" draggable="false" />
          <img class="image" src="https://w0.peakpx.com/wallpaper/717/685/HD-wallpaper-epic-war-widescreen-battle-dark-creature.jpg" draggable="false" />
          <img class="image" src="https://e0.pxfuel.com/wallpapers/102/403/desktop-wallpaper-fantasy-original-art-artistic-artwork-sea-ocean-creature-monster-and-mobile-background-epic-monster.jpg" draggable="false" />
        </div>
    </Box>
  );
};

export default FAQ;
