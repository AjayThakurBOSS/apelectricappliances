import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Paper
  } from "@mui/material";
import LayoutPage from '../layout/LayoutPage';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('/api/v1/feedback/getfeedbacks', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                // Check if the response is successful
                if (response.data.success) {
                    setFeedbacks(response.data.data);
                } else {
                    console.error('Failed to fetch feedbacks:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return (
            <LayoutPage>
                <p>Loading...</p>
            </LayoutPage>
        );
    }

    return (
        <LayoutPage>
        <h1>All Feedbacks</h1>
        {feedbacks.length > 0 ? (
            <Grid container spacing={3}>
            {feedbacks.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card elevation={3} component={Paper}>
                    <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <strong>Email:</strong> {item.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <strong>Contact:</strong> {item.contactNumber}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        <strong>Message:</strong> {item.message}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        <strong>Created At:</strong>{" "}
                        {new Date(item.createdAt).toLocaleString()}
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>
        ) : (
            <Box mt={3}>
            <Typography variant="body1" color="textSecondary" align="center">
                No feedbacks available.
            </Typography>
            </Box>
        )}
        </LayoutPage>
        );
};

export default Feedback;
