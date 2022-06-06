import React from 'react';

import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import { Grid, OutlinedInput } from '@mui/material';
import UploadForm  from './UploadForm';
import { Button } from '@mui/material';


// const PREFIX = 'ApplyModal';

// const classes = {
//   modal: `${PREFIX}-modal`,
//   paper: `${PREFIX}-paper`,
//   applyForm: `${PREFIX}-applyForm`,
//   label: `${PREFIX}-label`
// };

// const Root = styled('div')((
//   {
//     theme
//   }
// ) => ({
//   [`& .${classes.modal}`]: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   [`& .${classes.paper}`]: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     outline:'none'
//   },

//   [`& .${classes.applyForm}`]: {
//     boxSizing:'border-box',
//     width: "600px",
//     borderRadius:"10px", 
//     height: "80vh", 
//     backgroundColor: "white",
//     outline:'none',
//     padding:'40px',
//   },

//   [`& .${classes.label}`]: {
//     marginBottom:"20px"
//   }
// }));

export const ApplyModal = ({open,handleClose,jobId,handleApply}) => {

  return (
    <div
      style={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position:"relative"
      }}
     
    >
      
      <Modal
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
        <div className="applyForm" >
          {/* <div>{jobId}</div> */}

          <form action="
          ">
            <Grid container>
              <Grid item>
                <label style={{margin:"20px 0px",display:"block"}}>
                    Name
                </label>
                
                <OutlinedInput required style={{width:'500px'}}/>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <label style={{margin:"20px 0px",display:"block"}}>
                    Email
                </label>
                
                <OutlinedInput required style={{width:'500px'}} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <label style={{margin:"20px 0px",display:"block"}}>
                    Phone
                </label>
                
                <OutlinedInput required style={{width:'500px'}}/>
              </Grid>
            </Grid>
              <UploadForm />
          </form>
          <Button variant='contained' color='primary' style={{marginRight:'20px'}} onClick={handleApply}>Apply</Button>
          <Button variant='outlined' onClick={handleClose}>cancel</Button>
        </div>


      </Modal>
    </div>
  );
};
