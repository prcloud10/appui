import React from 'react';
import { makeStyles, Grid, Card, CardHeader, CardContent, Hidden, Typography, Divider, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import MonetizationOnTwoTone from '@material-ui/icons/MonetizationOnTwoTone';
import DescriptionTwoTone from '@material-ui/icons/DescriptionTwoTone';
import CalendarTodayTwoTone from '@material-ui/icons/CalendarTodayTwoTone';

import ReportCard from './ReportCard';
import LatestorderCard from './LatestorderCard';

import { gridSpacing } from './../../../store/constant';

const Default = () => {
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={10}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} sm={6} xs={9}>
                        <ReportCard
                            primary="$30200"
                            secondary="All Earnings"
                            color={theme.palette.warning.main}
                            footerData="10% changes on profit"
                            iconPrimary={MonetizationOnTwoTone}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={9}>
                        <ReportCard
                            primary={145}
                            secondary="Task"
                            color={theme.palette.error.main}
                            footerData="28% task performance"
                            iconPrimary={CalendarTodayTwoTone}
                            iconFooter={TrendingDownIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={9}>
                        <ReportCard
                            primary="290+"
                            secondary="Page Views"
                            color={theme.palette.success.main}
                            footerData="10k daily views"
                            iconPrimary={DescriptionTwoTone}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <LatestorderCard title="Latest Order" />
            </Grid>
        </Grid>
    );
};

export default Default;
