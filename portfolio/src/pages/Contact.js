import React from 'react';
import { Avatar, Button, TextField, Container, CssBaseline, Typography } from "@material-ui/core";
import { useFormControls } from "../components/Contact/ContactFormControls";
import inputFieldValues  from "../components/Contact/inputFields";
import { useContactStyles } from './styles';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Alert from '@material-ui/lab/Alert';

const Contact = () => {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors,
        showAlert,
        setShowAlert
    } = useFormControls();
    const classes = useContactStyles();

    return (
    
    <Container maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
            {showAlert ? <Alert onClose={() => {setShowAlert(false)}}>Your Message Was Sent Successfully!</Alert> : ""}
            <form className={classes.form} autoComplete="off" onSubmit={handleFormSubmit}>
                <Container className={classes.center}>
                    <Avatar className={ classes.avatar }>
                        <ContactMailIcon />
                    </Avatar>
                </Container>
                
                <Typography component="h1" variant="h5" align="center" className={classes.heading}>
                    CONTACT US
                </Typography>
                {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            // autoFocus
                            key={index}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            error={errors[inputFieldValue.name]}
                            multiline={inputFieldValue.multiline ?? false}
                            fullWidth
                            rows={inputFieldValue.rows ?? 1}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && {
                                error: true,
                                helperText: errors[inputFieldValue.name]
                            })}
                        />
                    );
                })}
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    color="secondary"
                    disabled={!formIsValid()}
                    className={classes.submit}
                >
                    Send Message
        </Button>
            </form>
        </div>
    </Container>
  );
}

export default Contact
