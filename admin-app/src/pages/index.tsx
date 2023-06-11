import SalesChart from "@/containers/dashboard/SalesChart";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Container>
        <Grid container className="grid grid-cols-12 gap-5 ">
          <Grid item className="col-span-full md:col-span-9">
            <Paper className="p-3 lg:p-5 w-full">
              <SalesChart />
            </Paper>
          </Grid>

          <Grid item className="col-span-full md:col-span-3">
            <Paper className="p-3 lg:p-5 flex flex-col h-full">
              <Typography variant="h5">Today</Typography>
              <Typography component="p" variant="h4">
                $3,024.00
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
              </Typography>
              <Link color="primary" href="#">
                View balance
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

HomePage.displayName = "Dashboard";

export default HomePage;
