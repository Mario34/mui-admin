import React from 'react'
import {
  Button, Box, Typography, Card, Grid, Chip, Alert,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core'
import LayoutHeader from '/@/components/LayoutHeader'

import type { RouteConfigComponentProps } from '/@/router'

const DataCard: React.FC<{
  title: string
  value: number | string
  tag: string
  tips: string
  tagColor?: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
}> = (props) => {
  return (
    <Card sx={{ px: 2, pt: 3, pb: 2 }}>
      <Typography gutterBottom variant="h6">{props.title}</Typography>
      <Typography gutterBottom variant="h5">{props.value}</Typography>
      <Typography gutterBottom component="div" variant="body2">
        {props.tag && <Chip color={props.tagColor || 'success'} label={props.tag} size="small" sx={{ mr: 1 }} />}
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
  return {
    name, calories, fat, carbs, protein,
  }
}

const Home: React.FC<RouteConfigComponentProps> = (props) => {
  return (
    <Box>
      <LayoutHeader
        renderRight={() => (
          <Button variant="contained">刷 新</Button>
        )}
        title={props.route?.extend?.name}
      />
      <Alert severity="success" sx={{ mb: 3 }}>所有的任务都已经完成了!</Alert>
      <Grid container mb={3} spacing={3}>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard tag="+28%" tips="相比上周增长" title="总成交订单额" value="¥615789.48" />
        </Grid>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard tag="-8%" tagColor="warning" tips="相比上周降低" title="一类总成交订单额" value="¥10889.48" />
        </Grid>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard tag="+12%" tagColor="secondary" tips="相比上周增长" title="一类总成交订单额" value="¥14789.48" />
        </Grid>
        <Grid item lg={4} md={6} xl={3}>
          <DataCard tag="+27%" tips="相比上周增长" title="三类总成交订单额" value="¥13389.48" />
        </Grid>
      </Grid>
      <Grid container mb={3} spacing={3}>
        <Grid item md={12} xl={6}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ minWidth: 650 }}>
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
            <Table aria-label="simple table" sx={{ minWidth: 650 }}>
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
            <Table aria-label="simple table" sx={{ minWidth: 650 }}>
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
