import React from 'react'
import {
  Button, Box, Typography, Card, Grid, Chip,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core'
import LayoutHeader from '/@/components/LayoutHeader'

import type { RouteConfigComponentProps } from '/@/router'

const DataCard: React.FC<{
  title: string
  value: string | number
  tag: string
  tips: string
  tagColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}> = (props) => {
  return (
    <Card sx={{ px: 2, pt: 3, pb: 2 }}>
      <Typography variant="h6" gutterBottom>{props.title}</Typography>
      <Typography variant="h5" gutterBottom>{props.value}</Typography>
      <Typography variant="body2" component="div" gutterBottom>
        {props.tag && <Chip size="small" label={props.tag} color={props.tagColor || 'success'} sx={{ mr: 1 }} />}
        {props.tips}
      </Typography>
    </Card>
  )
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: string,
) {
  return { name, calories, fat, carbs, protein }
}

const Home: React.FC<RouteConfigComponentProps> = (props) => {
  return (
    <Box>
      <LayoutHeader
        title={props.route?.extend?.name}
        renderRight={() => (
          <Button variant="contained">Contained</Button>
        )}
      />
      <Grid container spacing={3} mb={3}>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard title="总成交订单额" value="¥615789.48" tag="+28%" tips="相比上周增长" />
        </Grid>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard title="一类总成交订单额" value="¥10889.48" tag="-8%" tagColor="warning" tips="相比上周降低" />
        </Grid>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard title="一类总成交订单额" value="¥14789.48" tag="+12%" tagColor="secondary" tips="相比上周增长" />
        </Grid>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard title="三类总成交订单额" value="¥13389.48" tag="+27%" tips="相比上周增长" />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item md={12} xl={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>各区域订单数据</TableCell>
                  <TableCell align="right">客单价（元）</TableCell>
                  <TableCell align="right">下单人数</TableCell>
                  <TableCell align="right">一类订单占比（%）</TableCell>
                  <TableCell align="right">负责人</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  [
                    createData('华南一区', 159, 234, 24, '张三'),
                    createData('华南三区', 237, 198, 37, '张三'),
                    createData('华东一区', 262, 320, 24, '张三'),
                    createData('华北一区', 305, 145, 67, '张三'),
                    createData('西南一区', 356, 379, 49, '张三'),
                  ].map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={12} xl={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat (g)</TableCell>
                  <TableCell align="right">Carbs (g)</TableCell>
                  <TableCell align="right">Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  [
                    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                    createData('Eclair', 262, 16.0, 24, 6.0),
                    createData('Cupcake', 305, 3.7, 67, 4.3),
                    createData('Gingerbread', 356, 16.0, 49, 3.9),
                  ].map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={12} xl={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>各区域订单数据</TableCell>
                  <TableCell align="right">客单价（元）</TableCell>
                  <TableCell align="right">下单人数</TableCell>
                  <TableCell align="right">一类订单占比（%）</TableCell>
                  <TableCell align="right">负责人</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  [
                    createData('华南一区', 159, 234, 24, '张三'),
                    createData('华南三区', 237, 198, 37, '张三'),
                    createData('华东一区', 262, 320, 24, '张三'),
                    createData('华北一区', 305, 145, 67, '张三'),
                    createData('西南一区', 356, 379, 49, '张三'),
                  ].map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {props.children}
    </Box>
  )
}

export default Home