"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from "next/navigation";
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import aboutUs from "../public/aboutUs.jpg"
import logo from "../public/catlogo.png"
import zscelar from "../public/zscaler.png"
import vectra from "../public/vectra.png"
import aruba from "../public/aruba.png"
import symantec from "../public/symantec.png"
import f5 from "../public/f5.png"
import cloudflare from "../public/cloundflare.png"
import beyoundtrust from "../public/beyoundtrust.png"
import forescount from "../public/forescount.png"
import infobox from "../public/infoblox.png"
import checkpoint from "../public/checkpoint.png"
import fortinet from "../public/fortinet.png"
import palo from "../public/palo.png"
import cisco from "../public/cisco.png"
import juniper from "../public/juniper.png"
import huawei from "../public/huawei.png"
import extreme from "../public/extremeNetwork.png"
import IIGNIX from "../public/IIGNIX.png"
import ruckus from "../public/ruckus.png"
import vmware from "../public/vmware.png"
import veeam from "../public/veeam.png"
import spunk from "../public/splunk.png"
import solarwind from "../public/solarwind.png"
import ibm from "../public/IBM.png"
import office from "../public/office.png"
import tect from "../public/tect.jpg"
import { faTh, faUserLock, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const router = useRouter();
  const services = [
    {
      id: "enterprise-agility",
      icon: faTh,
      title: "Design",
      description: "Design a network system, server system, and cybersecurity system that is appropriate for the organization and effective for business"
    },
    {
      id: "datawise",
      icon: faUserLock,
      title: "IMPLEMENT & SUPPORT",
      description: "Manage service support for Switch, Router, Wireless Access Point, Firewall, WAF, AV-EDR, NAC, Monitoring Tools, Server, Storage, VMware, HCI, Etc.."
    },
    {
      id: "holistic-cybersecurity",
      icon: faLightbulb,
      title: "CONSULTING",
      description: "IT Consulting and Planning Services, including Cybersecurity Consulting Services, based on NIST Framework, PDPA, and Trend Technolog to your  organization."
    }
  ];

  const partners = [
    { src: zscelar, width: 400, height: 300, alt: "zscelar", title: 'CYBER SECURITY' },
    { src: vectra, width: 780, height: 397, alt: "vectra", title: 'CYBER SECURITY' },
    { src: aruba, width: 300, height: 244, alt: "aruba", title: 'CYBER SECURITY' },
    { src: symantec, width: 780, height: 115, alt: "symantec", title: 'CYBER SECURITY' },
    { src: f5, width: 300, height: 512, alt: "f5", title: 'CYBER SECURITY' },
    { src: cloudflare, width: 400, height: 300, alt: "cloudflare", title: 'CYBER SECURITY' },
    { src: beyoundtrust, width: 780, height: 397, alt: "beyoundtrust", title: 'CYBER SECURITY' },
    { src: forescount, width: 300, height: 244, alt: "forescount", title: 'CYBER SECURITY' },
    { src: infobox, width: 780, height: 115, alt: "infobox", title: 'CYBER SECURITY' },
    { src: checkpoint, width: 512, height: 512, alt: "checkpoint", title: 'CYBER SECURITY' },
    { src: fortinet, width: 400, height: 300, alt: "fortinet", title: 'CYBER SECURITY' },
    { src: palo, width: 780, height: 397, alt: "palo", title: 'CYBER SECURITY' },


    { src: cisco, width: 780, height: 397, alt: "cisco", title: 'NETWORK INFRASTRUCTURE' },
    { src: juniper, width: 780, height: 397, alt: "juniper", title: 'NETWORK INFRASTRUCTURE' },
    { src: huawei, width: 780, height: 397, alt: "huawei", title: 'NETWORK INFRASTRUCTURE' },
    { src: extreme, width: 780, height: 397, alt: "extreme", title: 'NETWORK INFRASTRUCTURE' },
    { src: ruckus, width: 780, height: 397, alt: "ruckus", title: 'NETWORK INFRASTRUCTURE' },
    { src: IIGNIX, width: 780, height: 397, alt: "IIGNIX", title: 'NETWORK INFRASTRUCTURE' },
    { src: aruba, width: 300, height: 244, alt: "aruba", title: 'NETWORK INFRASTRUCTURE' },

    { src: vmware, width: 780, height: 397, alt: "vmware", title: 'SYSTEM BACKUP RECOVERY' },
    { src: veeam, width: 300, height: 244, alt: "veeam", title: 'SYSTEM BACKUP RECOVERY' },

    { src: spunk, width: 780, height: 397, alt: "spunk", title: 'SIEM – LOG MANAGEMENT' },
    { src: solarwind, width: 300, height: 244, alt: "solarwind", title: 'SIEM – LOG MANAGEMENT' },
    { src: ibm, width: 300, height: 244, alt: "ibm", title: 'SIEM – LOG MANAGEMENT' },

  ];


  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#96CEB4' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white', // White background
                borderRadius: '50%', // Makes it an ellipse
                width: '100px', // Adjust width to control the size of the ellipse
                height: '60px', // Adjust height to control the size of the ellipse
                overflow: 'hidden', // Ensure the image fits within the ellipse
                marginRight: '20px' // Spacing on the right
              }}
            >
              <Image
                src={logo}
                alt="Picture of the author"
                blurDataURL="data:..." // Automatically provided
                placeholder="blur" // Optional blur-up while loading
                style={{
                  width: '100%', // Make the image fill the container
                  height: 'auto', // Maintain aspect ratio
                }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button

                onClick={() => router.push("/")}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 800, fontSize: "22px" }}
              >
                {"CAT CONSULTING"}
              </Button>
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


      <Container
        maxWidth={false} // Disable the maximum width constraint
        sx={{
          width: "100vw", // Use 100% of the viewport width
          // backgroundColor: "#f0f8ff", // Background color for the entire section
          background: "white",
          paddingBottom: "20px", // Adds padding at the bottom
          paddingTop: "20px", // Adds padding at the top
          overflowX: "hidden", // Prevents horizontal scrolling
        }}
      >
        <Typography
          align="left"
          sx={{
            marginLeft: "6.5%",
            my: 0,
            fontSize: "60px",
            fontWeight: 900,
            color: "#16423C",
            
          }}
        >
          ABOUT US
        </Typography>

        <Box
          sx={{
            display: "flex", // Use flexbox for horizontal alignment
            alignItems: "flex-start", // Align items to the top
            marginLeft: "6.5%",
            marginTop: "1%",
            // backgroundColor: "#f0f8ff", // Ensure background color consistency
            padding: "20px", // Adds padding to ensure content has space inside the box
          }}
        >
          <Image
            src={aboutUs}
            alt="Picture of the author"
            blurDataURL="data:..." // Automatically provided
            placeholder="blur" // Optional blur-up while loading
            style={{
              marginRight: "20px",
              width: '100%', // Adjust the width as needed
              maxWidth: '600px', // Maximum width of the image
              height: 'auto', // Maintain aspect ratio
            }} // Add margin-right for spacing

          />
          <div>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#16423C",
                margin: 0,
              }}
            >
              CONSULT AND SERVICE FOR IT SOLUTION
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#16423C",
                marginTop: "1.5%",
              }}
            >
              Providing planning, design, consulting, implementation and Manage services support for Hardware, Software, Infrastructure, and Cyber Security, and efficient information system management within the organization.
            </Typography>
          </div>
        </Box>
      </Container>

      <Container
        maxWidth={false} // Disable the maximum width constraint
        sx={{
          width: "100vw", // Use 100% of the viewport width
          // backgroundColor: "#f0f8ff", // Background color for the entire section
          background: "white",
          paddingBottom: "20px", // Adds padding at the bottom
          paddingTop: "20px", // Adds padding at the top
          overflowX: "hidden", // Prevents horizontal scrolling
        }}
      >

        <Box
          sx={{
            display: "flex", // Use flexbox for horizontal alignment
            alignItems: "flex-start", // Align items to the top
            marginLeft: "6.5%",
            marginTop: "1%",
            // backgroundColor: "#f0f8ff", // Ensure background color consistency
            padding: "20px", // Adds padding to ensure content has space inside the box
          }}
        >

          <Box
            sx={{ marginRight: "10%", marginLeft:"15%" }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#16423C",
                margin: 0,
              }}
            >
              SERVICE CONSULT
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#16423C",
                marginTop: "1.5%",

              }}
            >
              - CYBER SECURITY
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#16423C",
                marginTop: "1.5%",

              }}
            >
              - NETWORK
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                color: "#16423C",
                marginTop: "1.5%",

              }}
            >
              - SYSTEM
            </Typography>
          </Box>
          <Image
            src={tect}
            alt="Picture of the author"
            blurDataURL="data:..." // Automatically provided
            placeholder="blur" // Optional blur-up while loading
            style={{
              marginRight: "15%",
              width: '100%', // Adjust the width as needed
              maxWidth: '450px', // Maximum width of the image
              height: 'auto', // Maintain aspect ratio
            }} // Add margin-right for spacing
          />
        </Box>
      </Container>
      <Container maxWidth={false} // Disable the maximum width constraint
        sx={{
          width: "100vw", // Use 100% of the viewport width
          // backgroundColor: "#f0f8ff", // Background color for the entire section
          background: 'linear-gradient(135deg, #98DED9 0%, #E1BEE7 100%)',
          paddingBottom: "20px", // Adds padding at the bottom
          paddingTop: "20px", // Adds padding at the top
          overflowX: "hidden", // Prevents horizontal scrolling
        }}>
        <Typography
          align="center"
          sx={{
            fontSize: '28px',
            fontWeight: 900,
            color: '#16423C',
            mb: 3,
          }}
        >
          OUR OFFERED SERVICES
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Stack mini boxes vertically
            border: '1px solid #ddd', // Outer box border
            borderRadius: '10px', // Rounded corners for the outer box
            p: 2, // Padding inside the outer box
            mt: 2, // Margin-top for spacing
            maxWidth: '800px',
            marginLeft: "25%",
            background: "white"
          }}
        >
          <Grid container spacing={0}>
            {services.map((service) => (
              <Grid item xs={12} md={6} key={service.id}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // border: '1px solid #ddd', // Mini box border
                    borderRadius: '4px', // Rounded corners for mini boxes
                    p: 1, // Padding inside each mini box
                    maxHeight: '50%', // Make sure the height is full
                    boxSizing: 'border-box', // Include border and padding in the element's total width and height
                    minHeight: '200px', // Minimum height to ensure boxes are large enough
                  }}
                >
                  <Box sx={{ textAlign: '' }}>
                    <Box
                      sx={{
                        display: "flex", // Use flexbox for horizontal alignment
                        alignItems: "flex-start", // Align items to the top
                        marginLeft: "6.5%",
                        marginTop: "1%",
                        // backgroundColor: "#f0f8ff", // Ensure background color consistency
                        // padding: "5px", // Adds padding to ensure content has space inside the box
                      }}
                    >
                      <FontAwesomeIcon icon={service.icon} size="2x" style={{ color: '#16423C', marginBottom: '0.5rem' }} />
                      <div>
                        <Typography variant="h6" sx={{ marginLeft: "2.5%", fontWeight: 'bold', color: '#16423C', mb: 1 }}>
                          {service.title}
                        </Typography>
                        <Typography sx={{ color: '#333', fontSize: '14px' }}>
                          {service.description}
                        </Typography>
                      </div>
                    </Box>


                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container maxWidth={false} // Disable the maximum width constraint
        sx={{
          width: "100vw", // Use 100% of the viewport width
          // backgroundColor: "#f0f8ff", // Background color for the entire section
          background: 'white',
          paddingBottom: "20px", // Adds padding at the bottom
          paddingTop: "20px", // Adds padding at the top
          overflowX: "hidden", // Prevents horizontal scrolling
        }}>
        <Typography
          align="center"
          sx={{
            fontSize: '28px',
            fontWeight: 900,
            color: '#16423C',
            mb: 3,
          }}
        >
          OUR PARTNERS
        </Typography>


        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', // Ensure the boxes wrap when there is not enough space
            justifyContent: 'center', // Center the boxes horizontally
            gap: 3, // Adds space between the boxes
            padding: '20px', // Adds padding around the section
            marginTop: '20px',
          }}
        >
          {['CYBER SECURITY', 'NETWORK INFRASTRUCTURE'].map((title, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack the content vertically
                alignItems: 'center', // Center content horizontally
                border: '1px solid #ddd', // Outer box border
                borderRadius: '10px', // Rounded corners for the outer box
                p: 2, // Padding inside the outer box
                background: 'white',
                maxWidth: '500px',
                textAlign: 'center', // Center the text horizontally within the box
              }}
            >
              <Typography
                sx={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#16423C',
                  margin: 0,
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column', // Stack mini boxes vertically
                  // border: '1px solid #ddd', // Inner box border
                  borderRadius: '10px', // Rounded corners for the inner box
                  p: 2, // Padding inside the inner box

                  maxWidth: '100%', // Ensure the inner box does not exceed the width of the parent box
                }}
              >
                <Grid container spacing={2}>
                  {partners.filter(logo => logo.title === title).map((logo, index) => (
                    <Grid item xs={12} sm={4} md={2} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%', // Ensures the container takes full height
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height}
                          style={{
                            maxWidth: '100%', // Ensures the image is responsive
                            height: 'auto', // Maintains aspect ratio
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', // Ensure the boxes wrap when there is not enough space
            justifyContent: 'center', // Center the boxes horizontally
            gap: 3, // Adds space between the boxes
            padding: '20px', // Adds padding around the section
            marginTop: '20px',
          }}
        >
          {['SYSTEM BACKUP RECOVERY', 'SIEM – LOG MANAGEMENT'].map((title, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack the content vertically
                alignItems: 'center', // Center content horizontally
                border: '1px solid #ddd', // Outer box border
                borderRadius: '10px', // Rounded corners for the outer box
                p: 2, // Padding inside the outer box
                background: 'white',
                maxWidth: '500px',
                textAlign: 'center', // Center the text horizontally within the box
              }}
            >
              <Typography
                sx={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#16423C',
                  margin: 0,
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column', // Stack mini boxes vertically
                  // border: '1px solid #ddd', // Inner box border
                  borderRadius: '10px', // Rounded corners for the inner box
                  p: 2, // Padding inside the inner box
                  maxWidth: '100%', // Ensure the inner box does not exceed the width of the parent box
                }}
              >
                <Grid container spacing={2}>
                  {partners.filter(logo => logo.title === title).map((logo, index) => (
                    <Grid item xs={12} sm={4} md={2} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%', // Ensures the container takes full height
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height}
                          style={{
                            maxWidth: '100%', // Ensures the image is responsive
                            height: 'auto', // Maintains aspect ratio
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>

      </Container>

      <Container
        maxWidth={false} // Disable the maximum width constraint
        sx={{
          width: "100vw", // Use 100% of the viewport width
          // backgroundColor: "#f0f8ff", // Background color for the entire section
          background: "white",
          paddingBottom: "20px", // Adds padding at the bottom
          paddingTop: "20px", // Adds padding at the top
          overflowX: "hidden", // Prevents horizontal scrolling
        }}
      >
        <Typography
          align="left"
          sx={{
            marginLeft: "6.5%",
            my: 0,
            fontSize: "60px",
            fontWeight: 700,
            color: "#16423C",
          }}
        >
          CONTACT US
        </Typography>

        <Box
          sx={{
            display: "flex", // Use flexbox for horizontal alignment
            alignItems: "flex-start", // Align items to the top
            marginLeft: "6.5%",
            marginTop: "1%",
            // backgroundColor: "#f0f8ff", // Ensure background color consistency
            padding: "20px", // Adds padding to ensure content has space inside the box
          }}
        >
          <Image
            src={office}
            alt="Picture of the author"
            blurDataURL="data:..." // Automatically provided
            placeholder="blur" // Optional blur-up while loading
            style={{
              marginRight: "80px",
              width: '100%', // Adjust the width as needed
              maxWidth: '400px', // Maximum width of the image
              height: 'auto', // Maintain aspect ratio
            }} // Add margin-right for spacing

          />
          <div>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#16423C",
                margin: 0,
              }}
            >
              C.A.T. CONSULTING
            </Typography>
          
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#16423C",
                  marginTop: "1.5%",
                }}
              >
                Email: sales@catconsulting.co
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#16423C",
                  marginTop: "1.5%",
                }}
              >
                Address: 68/118 Soi Phaholyothin 71, Sanam Bin, Don Mueang, Bangkok 1021
              </Typography>
          </div>

        </Box>
      </Container>

    </div>

  );
}
