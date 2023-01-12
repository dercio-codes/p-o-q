import { useState } from "react"
import { Box , Grid , TextField , Button , Divider , Typography , MenuItem , Paper } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import LaunchIcon from '@mui/icons-material/Launch';

export const Auth = () => {
	
	const [ signUp , setSignUp ] = useState(false)
	const [ open , setOpen ] = useState(false)
	const [ user , setUser ] = useState({
		personal:{
			uid:"",
			name:"",
			surname:"",
			username:"",
			email:"2",
			age:"",
			dob:"",
			gender:"",
			userType:"",
			address:{
				number:"",
				street:"",
				town:"",
				city:"",
				province:"",
				country:"",
				postal:"",
				coordinates:{
					latitude:"",
					longitude:"",
				},
			},
		},
		social:{
			// users profile picture
			profilePicture:"",
	
			// featured images are images or videos put up
			stories:[],
	
			// if unique id is subscribed we add them to subscribed users if not we hide the content and prompt user to purchase content
			subscribedUsers:[],
			content:[],
		},
		hotelReccomendations:[],
		appointments:[],
	})
	
	return(
		<Box sx={{ minHeight:'100vh' , background:'#000' , padding:'0 5rem' }} >

			<Paper elevation={3} sx={{ display:open ? "flex" : 'none' , background:'rgba(250,250,250,1)' , margin:"0",  position:'fixed' , transition:'2500ms' , width:'99%' , left:'8px' , top:'1.5rem' , zIndex:'999' ,height:'100px' , borderRadius:'32px'   , justifyContent:'space-between' , padding:'0 2.5rem 0 1.5rem' , alignItems:'center'}} >
				<Button onClick={()=> setOpen(!open)} sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } , postion:'fixed' }}  > <MenuOpenIcon /> </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Home </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Search </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Appointments </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Live Stream </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Recommendations </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Profile </Button>
				<Button sx={{ scale:'0.8' , transition:'800ms' , fontSize:'18px' , color:'#111' , "&:hover":{borderRadius:"0" , borderBottom:'2px solid #111' , scale:'0.9' } }} > Sign Out </Button>
			</Paper>
			<Paper elevation={3} onClick={()=> setOpen(!open)} sx={{ display:open ? "none" : 'flex' , scale:'0.5' , background:'rgba(250,250,250,1)' , margin:"0",  position:'fixed' , transition:'2500ms' , width:'100px' , cursor:"pointer" , left:'0' , top:'1.5rem' , zIndex:'999' ,height:'100px' , borderRadius:'32px'  , justifyContent:'space-evenly' , alignItems:'center'}} >
			<MenuIcon sx={{fontSize:"50px"}} />
			</Paper>



			<Grid container sx={{margin:'150px 0'}}  >
			<Grid item xs={12} lg={6} sx={{ "&:hover":{ scale:'1'} , display:signUp ? "none" : 'block', boxShadow:'12px 21px 21px 21px rgba(1,1,1,.3)' , opacity:signUp ? "0.3" : "1" , transition:'800ms' , scale:'0.9' , minHeight:'95vh', borderRadius:{ xs:'32px 32px 0 0' , lg:'32px 0 0 32px'} , background:'#eee'  , padding:'2.5rem' }} >
				<Box sx={{ height:'150px' , background:'' , display:'flex' , alignItems:'center' }}>
				<Typography sx={{ textAlign:'center' , color:'#111' , margin:'auto auto', letterSpacing:'32px' ,fontSize:'62px' , fontWeight:600 , color:'#F56EB3' }}  > PARADISE</Typography>
				</Box>
				<Box sx={{ display:'flex' , flexDirection:'column' ,  alignItems:'center'}} >

				<TextField fullWidth placeHolder={"Username"} name="name" type="text" label="Name" sx={{ margin:'21px auto' , width:'60%'  ,  "& .MuiOutlinedInput-root": { border: '2px solid #111' , color:'#111' },
                            "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { border: '3px solid #111', color: '#111' } },
                            "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { border: '3px solid #111', color: '#111' } } }} /> <br/>
				<TextField fullWidth placeHolder={"Password"} name="password" type="password" label="Password" sx={{ margin:'21px auto' , width:'60%' ,    "& .MuiOutlinedInput-root": { border: '2px solid #111' , color:'#111' },
                            "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { border: '3px solid #111', color: '#111' } },
                            "& .MuiOutlinedInput-root.Mui-focused": { "& > fieldset": { border: '3px solid #111', color: '#111' } } }} /> <br/>
				<Button sx={{ background:'#460C68' , padding:'21px 0' , color:'#eee' , fontWeight:'600' , width:'350px' , margin:'21px 0' }} > Login </Button>
				</Box>
				<Typography sx={{ textAlign:'center' , color:'#111' , margin:'21px 0' }} > Terms & Conditions </Typography>
								<Box sx={{ display:'flex' , flexDirection:'column', justifyContent:'center' ,  alignItems:'center'}} >
				<Typography sx={{ textAlign:'center',color:'#111' , margin:'21px 0' , width:'fit-content' , fontWeight:600 , "&:hover":{ color:'#7F167F'} , cursor:'pointer' }} onClick={()=> setSignUp(!signUp)} > Sign Up Here </Typography>
				</Box>
				
				<Box sx={{ display:'flex' , justifyContent:'space-between' , alignItems:'center'  }}>
					<Divider sx={{ margin:'21px 0' , width:'45%' }} />
					<Typography sx={{ textAlign:'center' , color:'#111' , fontWeight:'600' }} > or  </Typography>
					<Divider sx={{ margin:'21px 0' , width:'45%' }} />
				</Box>

				<Typography sx={{ textAlign:'center', color:'#111' , margin:'21px 0' }} > Use Social Media  </Typography>
				<Box sx={{ display:'flex' , justifyContent:'space-between' ,  }}>
					<Button sx={{ margin:'21px 0' , background:'#3b5998' , padding:'21px 0' , color:'#eee' , fontWeight:'600' , width:'250px' }} > Facebook </Button>
					<Button sx={{ margin:'21px 0' , background:'#F4B400' , padding:'21px 0' , color:'#eee' , fontWeight:'600' , width:'250px' }} > Google </Button>
					<Button sx={{ margin:'21px 0' , background:'#1DA1F2' , padding:'21px 0' , color:'#eee' , fontWeight:'600' , width:'250px' }} > Twitter </Button>

				</Box>

			</Grid>
			<Grid item xs={12} lg={6} sx={{ 
									minHeight:'95vh' ,
									borderRadius:{ xs:'0 0 32px 32px'  , lg:'0 32px 32px 0'},
									background:'red',
									display:signUp ? "none" : 'block',
									backgroundImage:'url("https://images.pexels.com/photos/4336969/pexels-photo-4336969.jpeg?auto=compress&cs=tinysrgb&w=1600")' , 
									// backgroundImage:'url("https://images.pexels.com/photos/925746/pexels-photo-925746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")' , 
									backgroundSize:'cover',
									backgroundRepeat:'no-repeat',
									background:'center',
									padding:'0' }} >
									<Box sx={{ width:'100%' , height:'100%' , background:'rgba(1,1,1,.7)', borderRadius:'0 32px 32px 0', }} />
			</Grid>

						<Grid item xs={12} lg={6} sx={{ 
									minHeight:'95vh' ,
									borderRadius:'32px 0 0 32px',
									background:'red',
									display:signUp ? "block" : 'none',
									backgroundImage:'url("https://images.pexels.com/photos/5756495/pexels-photo-5756495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' , 
									// backgroundImage:'url("https://images.pexels.com/photos/925746/pexels-photo-925746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")' , 
									backgroundSize:'cover',
									backgroundRepeat:'no-repeat',
									background:'center',
									padding:'2.5rem' }} >
			</Grid>

			<Grid item xs={12} lg={6} sx={{ 
					
					background:'white',
									borderRadius:'0 32px 32px 0',
					transition:'800ms',
					display:signUp ? "block" : 'none',
					position:'relative',
					padding:'2.5rem' }} 
					>
					<Button sx={{ position:'absolute' , top:'1.5rem' , left:'2rem' , color:'rgba(1,1,1,.5)' }} onClick={()=> setSignUp(!signUp)} > <ArrowBackIcon sx={{ margin:'0 8px 0 0' }} /> Back to Sign In </Button>
						<Typography sx={{ textAlign:'' , margin:'42px 0 0 0' , fontWeight:100 , color:'rgba(1,1,1,.5)' , fontSize:'32px' }} > Personal </Typography>
						<Divider sx={{ width:'24px' , margin:'0 0 21px 0' }} />
						<TextField fullWidth placeHolder={"Name"} name="name" type="text" label="Name" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Surname"} name="surname" type="text" label="Surname" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Username"} name="username" type="text" label="Username" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Email"} name="email" type="email" label="Email" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Age"} name="age" type="number" label="Age" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"DOB"} name="dob" type="date" label="" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Gender"} name="gender" type="select" select label="Gender" sx={{ margin:'21px 0' }}>
							<MenuItem value="" sx={{color:"transparent"}} >Client</MenuItem>
							<MenuItem value="Male">Male</MenuItem>
							<MenuItem value="Female">Female</MenuItem>
						</TextField>
						<TextField fullWidth placeHolder={"User Type"} name="userType" type="select" select label="User Type" sx={{ margin:'21px 0' }}>
							<MenuItem value="" sx={{color:"transparent"}} >Client</MenuItem>
							<MenuItem value="Client">Client</MenuItem>
							<MenuItem value="Escort">Escort</MenuItem>
						</TextField>
						
						<Typography sx={{ textAlign:'' , margin:'21px 0 0 0' , fontWeight:100 , color:'rgba(1,1,1,.5)' , fontSize:'32px' }} > Location </Typography>
						<Divider sx={{ width:'24px' , margin:'0 0 21px 0' }} />
						<TextField fullWidth placeHolder={"Number"} name="" type="" label="Number" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"StreetName"} name="name" type="text" label="Street Name" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Town"} name="" type="" label="Town" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"City"} name="name" type="text" label="City" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Province"} name="" type="" label="Province" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Postal"} name="name" type="text" label="Postal" sx={{ margin:'21px 0' }} />
						<TextField fullWidth placeHolder={"Country"} name="" type="" label="Country" sx={{ margin:'21px 0' }} />

			</Grid>
			</Grid>



			<Box sx={{ minHeight:'100vh' , margin:'60px 0' }} >
									<Typography sx={{ textAlign:'' , margin:'21px 0 12px 0' , fontWeight:100 , color:'rgba(255,255,255,.5)' , fontSize:'32px' }} > Models </Typography>
						<Divider sx={{ width:'24px' , margin:'0 0 62px 0', background:'rgba(255,255,255,.7)' }} />
				<Grid container spacing={6}>
				<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Not Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

					<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

					<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

					<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Not Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

									<Grid item xs={6} lg={2} >
				<Box sx={{ height:'400px' , background:'rgba(255,255,255,.9)' , width:'100%' , padding:'0' , display:'flex' , flexDirection:'column' , justifyContent:'center' , borderRadius:'21px' }} >
					<Box sx={{ height:'200px' , background:'' }} />
						<Box sx={{ height:'200px' , background:'' , width:'100%' , padding:'0 21px' , display:'flex' , flexDirection:'column' , justifyContent:'space-evenly' }} >
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johnnessburg </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 0 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Status :</Typography> Available </Typography>
							<Button sx={{ background:'#460C68' , padding:'12px 0' , color:'#eee' , fontWeight:'600' , width:'100%' , margin:'8px 0' }} > Book </Button>
						</Box>
					</Box>
				</Grid>

								
				</Grid>
				</Box>



				<Box sx={{ minHeight:'30vh' , background:'' , margin:'50px 0' , padding:'12px' }} >
				<Typography sx={{ textAlign:'' , margin:'0 0 12px 0' , fontWeight:100 , color:'rgba(255,255,255,.5)' , fontSize:'32px' }} > Appointments </Typography>
				<Divider sx={{ width:'24px' , margin:'0 0 21px 0', background:'rgba(255,255,255,.7)' }} />
				
				<Grid container >
				<Grid item xs={12} lg={4} sx={{height:'120px' , display:'flex' , scale:'0.98' , transition:'800ms' , "&:hover":{scale:'1'} , padding:'0 0 0' , border:'5px solid #000' , background:''}} >
					
					<Paper elevation={3} sx={{ width:'100%' , height:'100%' , display:'flex' , background:'rgba(255,255,255,.8)' }} >
					<Box sx={{ height:'100%' , flex:'1' , 
									backgroundImage:'url("https://images.pexels.com/photos/4883795/pexels-photo-4883795.png?auto=compress&cs=tinysrgb&w=600&lazy=load")' , 				
									backgroundSize:'cover',
									backgroundRepeat:'no-repeat',
									backgroundPostion:'center',
									 }} /> 
					<Box sx={{ height:'100%' , flex:'2' , background:'' ,padding:'8px' }}>
							<Typography sx={{ textAlign:'' , margin:'0 0 4px 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Name :</Typography> Scarlett </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 4px 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Time :</Typography> 09:00 - 21/02/23  </Typography>
							<Typography sx={{ textAlign:'' , margin:'0 0 4px 0' , fontWeight:600 , color:'rgba(1,1,1,.8)' , fontSize:'18px' }} > <Typography variant="span" sx={{ fontSize:'16px' , fontWeight:'100' , color:'rgba(1,1,1,.6)' }} > Location :</Typography> Johanessbrg </Typography>


					</Box>
					<Box sx={{ height:'100%' , flex:'1' , background:'' ,padding:'8px' ,  display:'flex' , justifyContent:'center' , alignItems:'center'  , flexDirection:'column' }}>
						<Box sx={{  display:'flex' , justifyContent:'space-evenly' , alignItems:'center'  }} >
							<Button><DoneIcon sx={{ color:'rgba(1,1,1,.7)' }}  /></Button>
							<Button><ClearIcon sx={{ color:'rgba(1,1,1,.7)' }}  /></Button>
						</Box>

						<Box>
							<Button><LaunchIcon sx={{ color:'rgba(1,1,1,.7)' }}  /></Button>
						</Box>
					</Box>
					</Paper>
				</Grid>


				


				</Grid>
				</Box>



				<Box sx={{ minHeight:'50vh' , background:'' , padding:'21px' }} >
					<Typography sx={{ textAlign:'' , margin:'21px 0 12px 0' , fontWeight:100 , color:'rgba(255,255,255,.5)' , fontSize:'32px' }} > Recommendations </Typography>
					<Divider sx={{ width:'24px' , margin:'0 0 21px 0', background:'rgba(255,255,255,.7)' }} />
				
					<Box sx={{display:'flex'}}>
					<Box sx={{ height:'45vh' , width:'50%', background:'red' , display:'flex' , alignItems:'flex-end' , justifyContent:'flex-end' }} >
					<Box sx={{ width:'50%' , height:'100px' , background:'green' }} />
					<Box sx={{ width:'50%' , height:'100px' , background:'pink' }} />
					</Box>
					<Box sx={{ height:'45vh' , width:'50%', background:'yellow' , display:'flex' , alignItems:'flex-end' , justifyContent:'flex-end' }}>
					<Box sx={{ width:'50%' , height:'100px' , background:'green' }} />
					<Box sx={{ width:'50%' , height:'100px' , background:'blue' }} />
					</Box>
					</Box>

				</Box>


				<Box sx={{ minHeight:'20vh' , background:'' ,display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center' , padding:'21px' }} >
					<Typography sx={{ textAlign:'center' , margin:'21px 0 0 0' , fontWeight:100 , color:'rgba(255,255,255,.5)' , fontSize:'21px' }} > Made by Atomus Dev </Typography>
					<Typography sx={{ textAlign:'center' , margin:'12px 0 0 0' , fontWeight:100 , color:'rgba(255,255,255,.5)' , fontSize:'21px' }} > 2023 </Typography>
					
					
				</Box>
		</Box>
	)
}