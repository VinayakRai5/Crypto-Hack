import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material'; // Assuming you're using Material-UI for styling

const HomePage = () => {
    return (
        <div className="home-container">
            <Typography variant="h3" component="h1" gutterBottom>
                Welcome to Our Crypto Trading Platform
            </Typography>
            <p className="mb-4">Our platform is designed with your mental health and risk management in mind. Whether you're a seasoned trader or just starting out, we've got you covered.</p>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Emotional Monitoring</Typography>
                            <Typography variant="body2" color="textSecondary">Track your mood levels and assess stress with trade metrics.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Intervention and Safeguards</Typography>
                            <Typography variant="body2" color="textSecondary">Get suggestions for breaks and lock-outs for stress, and address gambling addictions.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Educational Support</Typography>
                            <Typography variant="body2" color="textSecondary">Analyze your trades and receive personalized and actionable insights.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Anxiety Reduction</Typography>
                            <Typography variant="body2" color="textSecondary">Understand your mindset and influences to make informed decisions.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Risk Management</Typography>
                            <Typography variant="body2" color="textSecondary">Utilize AI-based solutions to set staggered thresholds for trading.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Portfolio Tracking</Typography>
                            <Typography variant="body2" color="textSecondary">Keep track of your portfolio's performance and monitor your investments.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Community Forums</Typography>
                            <Typography variant="body2" color="textSecondary">Connect with other traders, share insights, and learn from experienced investors.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">News & Updates</Typography>
                            <Typography variant="body2" color="textSecondary">Stay informed with the latest news, market trends, and updates in the crypto world.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Customizable Alerts</Typography>
                            <Typography variant="body2" color="textSecondary">Set up alerts for price changes, news events, and other important updates.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">About Our Website</h2>
                <p className="mb-2">Our crypto trading platform provides a user-friendly interface for traders of all levels.</p>
                <p className="mb-2">With advanced features like emotional monitoring and risk management, we prioritize the well-being of our users.</p>
                <p className="mb-2">Join our community today and take control of your financial future!</p>
            </div>
        </div>
    );
};

export default HomePage;
