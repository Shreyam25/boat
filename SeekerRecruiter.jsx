import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material/";
import { useState } from "react";
import { auth, db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default function RecruiterForm() {
    const [formData, setFormData] = useState({
        name: "",
        jd: "",
        company_name: "",
        company_mail: "",
        company_phoneno: "",
        location: "",
        package: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // You can add your Firebase Firestore code here to save the form data
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    };

    return (
        <Container style={{ height: "100vh" }}>
            <Grid container spacing={3} style={{ height: "100%" }}>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <TextField label="Name" type="text" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />

                        <TextField label="Job Description" type="text" name="jd" value={formData.jd} onChange={handleChange} fullWidth margin="normal" />

                        <TextField label="Company Name" type="text" name="company_name" value={formData.company_name} onChange={handleChange} fullWidth margin="normal" />

                        <TextField label="Company Email" type="email" name="company_mail" value={formData.company_mail} onChange={handleChange} fullWidth margin="normal" />

                        <TextField label="Company Phone Number" type="tel" name="company_phoneno" value={formData.company_phoneno} onChange={handleChange} fullWidth margin="normal" />

                        <TextField label="Location" type="loc" name="location" value={formData.location} onChange={handleChange} fullWidth margin="normal" />


                        <TextField label="Package" type="text" name="package" value={formData.package} onChange={handleChange} fullWidth margin="normal" />

                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}
