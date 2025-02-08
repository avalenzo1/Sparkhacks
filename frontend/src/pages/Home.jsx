import PropTypes from "prop-types";
import { Container, Tooltip, Typography } from "@mui/material";
import { Column, DemoAppBar, ResponsiveContainer } from "@components";

import {
  HTML5Logo, CSS3Logo, JSLogo,
  NodeLogo, ViteLogo, ReactLogo, MUILogo,
  PythonLogo, DjangoLogo
} from "@assets";

import "@styles/index.css";

function TechLogo({ logo, link, hint }) {
  return (
    <Tooltip title={hint} slotProps={{
        popper: {
          modifiers: [{
            name: "offset",
            options: { offset: [0, -12] }
          }]
        }
    }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={hint} style={{ height: 100 }}/>
      </a>
    </Tooltip>
  );
};

TechLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,         
  hint: PropTypes.string.isRequired
};

export default function Home() {
  return (
    <>
      <DemoAppBar/>
      <Container sx={{ padding: 4 }}>
        <Column gap={3}>
          <Typography variant="h2">
            Tango with Django Demo Project
          </Typography>

          <Typography variant="body1" sx={{textAlign: "center"}}>
            Just a small demo project made by Kaito Sekiya for SparkHacks 2025 Tango with Django workshop. Adapted from the Django React Demo project for CS 351 Advanced Data Structures taught by Professor Shanon Reckinger.
          </Typography>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            The goal of this workshop is to integrate Django as the backend for a React-based TODO application. This will enable creating, editing, and deleting tasks with a persistent database, so changes remain even if the page is refreshed. Participants will learn the basics of models, views, and REST APIs, and how to connect it to a React frontend, and how to implement CRUD functionalaty with it. During the workshop, the participants will follow along to implemnt editing tasks which involves both GET and PUT requests (Read and Update from CRUD respectively). By the end of the session, attendees will hopefully have a fully functional TODO app and learn some Django.
          </Typography>

          <Typography variant="h4">Frontend</Typography>
          <ResponsiveContainer gap={4}>
            <TechLogo logo={HTML5Logo} link="https://html.spec.whatwg.org/multipage/" hint="HTML5" />
            <TechLogo logo={CSS3Logo} link="https://www.w3.org/Style/CSS/Overview.en.html" hint="CSS3" />
            <TechLogo logo={JSLogo} link="https://www.javascript.com" hint="JavaScript" />

            <TechLogo logo={NodeLogo} link="https://nodejs.org" hint="Node" />
            <TechLogo logo={ViteLogo} link="https://vite.dev" hint="Vite" />
            <TechLogo logo={ReactLogo} link="https://react.dev" hint="React" />
            <TechLogo logo={MUILogo} link="https://mui.com/material-ui/" hint="MUI" />
          </ResponsiveContainer>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            For frontend, this demo project primarily uses React as well as utilizes a variety of components from the MUI (Material UI) library to simplify and speed up the development. Since React is a JavaScript-based web framework, HTML, CSS, and JavaScript are also extensively used throughout the project. Additionally, Vite was used to set up the project template while Node is handling the build process and rendering the frontend.
          </Typography>

          <Typography variant="h4">Backend</Typography>
          <ResponsiveContainer gap={4}>
            <TechLogo logo={PythonLogo} link="https://www.python.org" hint="Python" />
            <TechLogo logo={DjangoLogo} link="https://www.djangoproject.com" hint="Django" />
          </ResponsiveContainer>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            For backend, this demo project uses Django, a Python framework to build web applications.
          </Typography>
        </Column>
      </Container>
    </>
  );
}