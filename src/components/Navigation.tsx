import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const drawerWidth = 240;

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  
  const navItems = [
    [t.nav.expertise, 'expertise'], 
    [t.nav.timeline, 'timeline'], 
    [t.nav.projects, 'projects']
  ];

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {mode === 'dark' ? (
              <LightModeIcon onClick={() => modeChange()} sx={{ cursor: 'pointer' }}/>
            ) : (
              <DarkModeIcon onClick={() => modeChange()} sx={{ cursor: 'pointer' }}/>
            )}
            <Box
              onClick={toggleLanguage}
              sx={{
                position: 'relative',
                width: '80px',
                height: '36px',
                borderRadius: '18px',
                cursor: 'pointer',
                background: mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                border: mode === 'dark'
                  ? '1px solid rgba(255, 255, 255, 0.2)'
                  : '1px solid rgba(0, 0, 0, 0.2)',
                boxShadow: mode === 'dark'
                  ? 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
                  : 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                padding: '3px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(0, 0, 0, 0.15)',
                  border: mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.3)'
                    : '1px solid rgba(0, 0, 0, 0.3)',
                }
              }}
            >
              {/* Slider knob */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  background: mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))'
                    : 'linear-gradient(145deg, rgba(100, 100, 100, 0.9), rgba(50, 50, 50, 0.8))',
                  boxShadow: mode === 'dark'
                    ? '0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
                    : '0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  transform: language === 'en' ? 'translateX(44px)' : 'translateX(0px)',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(5px)',
                }}
              />
              {/* FR label */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '8px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: language === 'fr'
                    ? (mode === 'dark' ? '#000' : '#fff')
                    : (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'),
                  transition: 'color 0.3s ease',
                  zIndex: 1,
                  pointerEvents: 'none',
                  textShadow: language === 'fr'
                    ? (mode === 'dark' ? '0 1px 2px rgba(255, 255, 255, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.3)')
                    : 'none',
                }}
              >
                FR
              </Box>
              {/* EN label */}
              <Box
                sx={{
                  position: 'absolute',
                  right: '8px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: language === 'en'
                    ? (mode === 'dark' ? '#000' : '#fff')
                    : (mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'),
                  transition: 'color 0.3s ease',
                  zIndex: 1,
                  pointerEvents: 'none',
                  textShadow: language === 'en'
                    ? (mode === 'dark' ? '0 1px 2px rgba(255, 255, 255, 0.3)' : '0 1px 2px rgba(0, 0, 0, 0.3)')
                    : 'none',
                }}
              >
                EN
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item[0]} 
                onClick={() => scrollToSection(item[1])} 
                sx={{ 
                  color: mode === 'dark' ? '#fff' : '#0D1117',
                  marginLeft: '10px',
                  padding: '8px 20px',
                  borderRadius: '12px',
                  background: mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: mode === 'dark'
                    ? '0 4px 16px 0 rgba(0, 0, 0, 0.2)'
                    : '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                    border: mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: mode === 'dark'
                      ? '0 6px 20px 0 rgba(0, 0, 0, 0.3)'
                      : '0 6px 20px 0 rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;