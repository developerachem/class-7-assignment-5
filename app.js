let total = 0;

piknik.map ( (data) => {
    
    let taka = data.fee; 

    // This Is Piknik Catagori Calculetor
    function catagori (){

        if( taka === 1500 ){
            return ` তুমি আমাদের ফাষ্ট ক্লাশ টুরিস্ট , তুমি এসি বাসের ভিতরে গিয়ে বসো । `
        }else if( taka === 1000 ){
            return ` তুমি আমাদের মিডেল ক্লাশ টুরিস্ট , তুমি নন এসি বাসে গিয়ে বসো । `
        }else if( taka === 500 ){
            return ` তুমি আমাদের কম টাকা দিয়েছো , তুমি হলো লো ক্লাশ টুরিস্টদের রিসিয়ালে , জাও সাউন্ড বক্সের গাড়ির সাথে দারাইয়া দারাইয়া আসো । `
        }
    }

    
    console.log(`
    
    Your Token No   :   ${data.tokenNumber}.
    Your Name       :   ${data.name}.
    Your Age        :   ${data.age}.
    Your Address    :   ${data.loocation}.
    Your Fee        :   ${data.fee}.
    Last Time       :   ${data.time}.
----------------------------------------------
    Your Massage    :   ${catagori()}

    `);

    total = total + data.fee;

})

console.log(` Our Total Income = ${total} Taka .



`);