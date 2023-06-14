import React, { useEffect } from "react"
import {
  Toolbar,
  Typography,
  Autocomplete,
  Box,
  AppBar,
  Button,
  IconButton,
  TextField,
} from "@mui/material"
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCartItems } from "widgets/Header/api/headerSlice.js"


export const Header = ({
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  const dispatch = useDispatch();

  const {cartItems} = useSelector((state) => state.header);

  useEffect(() => {
    dispatch(fetchAllCartItems())
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
      >
        <Toolbar>
          <IconButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{flexGrow: 1}}>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', cursor: 'pointer', color: 'green' }}
              >
                Flowers
                <LocalFloristOutlinedIcon color="success" sx={{ms: 1}}/>
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Box sx={{display: 'flex', alignItems: 'center'}} my={2}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                mx={1}
                sx={{color: '#eeeeee', backgroundColor: 'green', padding: '2px 8px', borderRadius: '50%', lineHeight: 'initial'}}
              >
                {cartItems?.length}
              </Typography>
              <Link to='/cart'>
                <ShoppingCartIcon sx={{color: "green", marginTop: '3px' }}/>
              </Link>
            </Box>
            <Link to='/about'>
              <Button variant="string" sx={{ minWidth: 100, color: 'green', fontWeight: 'bold'}} >О компании</Button>
            </Link>
            <Button variant="string" sx={{ minWidth: 100, color: 'green', fontWeight: 'bold' }}>Контакты</Button>
            <Button variant="string" sx={{ minWidth: 100, color: 'green', fontWeight: 'bold'}}>Новости</Button>
            <Button variant="string" sx={{ minWidth: 100, color: 'green', fontWeight: 'bold'}}>Оплата</Button>
            <Link to='/delivery'>
              <Button variant="string" sx={{ minWidth: 100, color: 'green', fontWeight: 'bold'}}>Доставка</Button>
            </Link>
          </Box>
          <SearchIcon />
          <Autocomplete
            sx={{ width: 250 }}
            freeSolo
            renderOption={(props, option) => <div {...props} onClick={() => console.log(props)}>{option.label}</div>}
            renderInput={(params) => <TextField {...params} />}
            options={[{ label: 'Роза' }]}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
