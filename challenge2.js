const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//endpoint kubus
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi) //mengambil nilai sisi dari body

    let volume = sisi * sisi * sisi
    let luaspermukaan = 6 * sisi * sisi

    let response = {
        sisi: sisi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

//endpoint balok
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luaspermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

//endpoint lingkaran
app.post("/lingkaran", (req,res) => {
    let jarijari = Number(req.body.jarijari)

    let volume = 3/4 * 22/7 * jarijari * jarijari * jarijari
    let luaspermukaan = 4 * 22/7 * jarijari * jarijari 

    let response = {
        jarijari: jarijari,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

//endpoint tabung
app.post("/tabung", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let jarijari = Number(req.body.jarijari)

    let volume = 22/7 * jarijari * jarijari * tinggi
    let luaspermukaan = 2 * 22/7 * jarijari * (jarijari + tinggi)

    let response = {
        tinggi: tinggi,
        jarijari: jarijari,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    res.json(response)
})

//endpoint celcius
app.get("/convert/celcius/:c", (req,res) => {
    let c = req.params.c

    let reamur = 4/5 * c
    let fahrenheit = 9/5 * c + 32
    let kelvin = 273 + (c * 1)

    let response = {
        celcius: c,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})

//endpoint reamur
app.get("/convert/reamur/:r", (req,res) => {
    let r = req.params.r

    let celcius = 5/4 * r
    let fahrenheit = 9/4 * r + 32
    let kelvin = (5/4 * r) + 273

    let response = {
        reamur: r,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin,
        }
    }

    res.json(response)
})

//endpoint fahrenheit
app.get("/convert/fahrenheit/:f", (req,res) => {
    let f = req.params.f

    let celcius = 5/9 * (f - 32)
    let reamur = 4/9 * (f - 32)
    let kelvin = 5/9 * (f - 32) + 273

    let response = {
        fahrenheit: f,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    res.json(response)
})

//enpoint kelvin
app.get("/convert/kelvin/:k", (req,res) => {
    let k = req.params.k

    let celcius = k - 273
    let reamur = 4/5 * (k -273)
    let fahrenheit = 9/5 * (k -273) + 32

    let response  = {
        kelvin: k,
        result: {
            celcius: celcius,
            reamur: reamur,
            fahrenheit: fahrenheit
        }

    }

    res.json(response)
})

//endpoint decimal
app.post("/decimal", (req,res) => {
    var bil = parseInt(req.body.bil)
    let biner = (bil).toString(2)
    let octal = (bil).toString(8)
    let hexadecimal = (bil).toString(16)

    res.json({
        decimal : bil,
        biner : biner,
        octal : octal,
        hexadecimal :  hexadecimal
    })
})

//endpoint biner
app.post("/biner",(req,res) => {
    var bil = parseInt(req.body.bil)
    let decimal = parseInt(bil, 2)
    let hexadecimal = (decimal).toString(16)
    let octal = (decimal).toString(8)
  
    res.json({
      biner : bil,
      decimal : decimal,
      octal : octal,
      hexadecimal : hexadecimal
    })
  })

//endpoint octal
app.post("/octal",(req,res) => {
    var bil = parseInt(req.body.bil)
    let decimal = parseInt(bil, 8)
    let biner = (decimal).toString(2)
    let hexadecimal = (decimal).toString(16)
  
    res.json({
      octal : bil,
      decimal : decimal,
      biner : biner,
      hexadecimal : hexadecimal
    })
  })

//endpoint hexadecimal
app.post("/hexadecimal", (req,res) => {
    var bil = parseInt(req.body.bil)
    let decimal = parseInt(bil, 16)
    let biner = (decimal).toString(2)
    let octal = (decimal).toString(8)

    res.json({
        hexadecimal : bil,
        decimal : decimal,
        biner : biner,
        octal : octal
    })
})

//end point BMI
app.post("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)

    let bmi = berat / (tinggi * tinggi)
    if (bmi < 18.5){
        message = "Kekurangan berat badan"
    }else if (bmi >= 18.5 && bmi < 24.9){
        message = "Normal(ideal)"
    }else if (bmi >= 25.0 && bmi < 29.9){
        message = "Kelebihan berat badan"
    }else{
        message = "Obesitas"
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: message
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

