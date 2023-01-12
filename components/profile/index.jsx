import { useState } from "react"
import { Box , Grid , TextField , Button , Divider , Avatar , Typography , MenuItem , Paper } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ProfileComponent = () => {
	
	const [ signUp , setSignUp ] = useState(false)
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
		<Box sx={{ minHeight:'100vh' , background:'#eee' , padding:'0' }} >

		<Grid container >
		<Grid item xs={4} sx={{ minHeight:'100vh' , padding:'21px' }} >
						<Typography sx={{ textAlign:'' , margin:'42px 0 0 0' , fontWeight:100 , color:'rgba(1,1,1,.5)' , fontSize:'32px' }} > Personal </Typography>
						<Divider sx={{ width:'24px' , margin:'0 0 21px 0' }} />
						<Avatar sx={{ height:'120px'  ,width:'120px' , margin:'32px 0 0 0 ' }} />

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
		<Grid item xs={4} sx={{ height:'100vh' , padding:'21px' }} >
		</Grid>
		<Grid item xs={4} sx={{ height:'100vh' , padding:'21px' }} >
		</Grid>		
		</Grid>
		</Box>
	)
}