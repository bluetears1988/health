/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png']
    return arr
}

/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(start, end){
    var arr = [
            {
                id:1,
                icon:"",
                title:"热门"
            },
            {
                id:2,
                icon:"",
                title:"男性"
            },
            {
                id:3,
                icon:"",
                title:"女性"
            },
            {
                id:4,
                icon:"",
                title:"公立医院"
            },
            {
                id:5,
                icon:"",
                title:"父母"
            },
            {
                id:6,
                icon:"",
                title:"年轻人"
            },
            {
                id:7,
                icon:"",
                title:"中老年"
            },
            {
                id:8,
                icon:"",
                title:"团购"
            }
        ]
    return arr.slice(start, end)
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                // [
                    {
                        pkgctn:0,
                        pkgtype:'xiaoxin',
                        pkgid:0,
                        subject:"妇科专项套餐",
                        coverpath:"",
                        stars:'3.5',
                        price:'198',
                        init_price:'¥366',
                        groupon:'¥168/人  3-4人',
                        sales:'200',
                        population:'200',
                        people:'已婚中老年女性',
                        symptom:'HPV、宫颈、乳腺、卵巢',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        pkgctn:0,
                        pkgtype:'biaozhun',
                        pkgid:1,
                        subject:"关爱父母标准套餐",
                        coverpath:"../../images/recommend_img_02.png",
                        stars:'4',
                        price:'¥1888/人',
                        population:'200',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        pkgctn:0,
                        pkgtype:'gaoji',
                        pkgid:2,
                        subject:"关爱父母高级套餐",
                        coverpath:"../../images/recommend_img_03.png",
                        stars:'2',
                        price:'¥1588/人',
                        population:'200',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        pkgctn:0,
                        pkgtype:'haohua',
                        pkgid:3,
                        subject:"关爱父母豪华全面套餐",
                        coverpath:"../../images/recommend_img_05.png",
                        stars:'2.5',
                        price:'¥198/人',
                        population:'200',
                        message:'伊本造型是由著名形象设计师杨进先生创办。'
                    },
                    {
                        pkgctn:0,
                        pkgtype:'zuanshi',
                        pkgid:4,
                        subject:" 关爱父母钻石版套餐",
                        coverpath:"../../images/recommend_img_06.png",
                        stars:'4.5',
                        price:'¥198/人',
                        population:'200',
                        message:'《微微一笑很倾城》的剧照简直美腻到不要不要的'
                    },
                    {
                        pkgctn:0,
                        pkgtype:'haohua',
                        pkgid:5,
                        subject:"关爱父母豪华全面套餐",
                        coverpath:"../../images/recommend_img_05.png",
                        stars:'2.5',
                        price:'¥198/人',
                        population:'200',
                        message:'伊本造型是由著名形象设计师杨进先生创办。'
                    },
                    {
                        pkgctn:0,
                        pkgtype:'zuanshi',
                        pkgid:6,
                        subject:" 关爱父母钻石版套餐",
                        coverpath:"../../images/recommend_img_06.png",
                        stars:'4.5',
                        price:'¥198/人',
                        population:'200',
                        message:'《微微一笑很倾城》的剧照简直美腻到不要不要的'
                    }
                ]
            //     [
            //         {
            //             artype:'nails',
            //             subject:"秋季自然特价美甲",
            //             coverpath:"../../images/recommend_img_01.png",
            //             price:'¥198',
            //             message:'我们追求的是没有最长只有更长！'
            //         }
            //     ],
            //     [
            //         {
            //             artype:'beauty',
            //             subject:"爱丽克EircParisSalon",
            //             coverpath:"../../images/recommend_img_03.png",
            //             price:'¥1588',
            //             population:'200',
            //             message:'我们追求的是没有最长只有更长！'
            //         },
            //         {
            //             artype:'beauty',
            //             subject:" 画对了妆，微微一笑颜值倍儿高！",
            //             coverpath:"../../images/recommend_img_06.png",
            //             price:'¥198',
            //             message:'《微微一笑很倾城》的剧照简直美腻到不要不要的'
            //         }
            //     ],
            //     [
            //         {
            //             artype:'hair',
            //             subject:"伊本造型",
            //             coverpath:"../../images/recommend_img_05.png",
            //             price:'¥1588',
            //             message:'伊本造型是由著名形象设计师杨进先生创办。'
            //         }
            //     ],
            //     [
            //         {
            //             artype:'eyelash',
            //             subject:"睫毛稀疏 种睫毛来帮忙",
            //             coverpath:"../../images/recommend_img_02.png",
            //             price:'¥1888',
            //             message:'我们追求的是没有最长只有更长！'
            //         }
            //     ] 
            // ]
    return arr
}

//获取套餐详细信息
function getPkgDetailData(pkgctn, pkgtype){
    var arr = [{
        xiaoxin:{
            subject:"关爱父母孝心套餐",
            coverpath:"",
            price:'¥198/人',
            groupon:'¥168/人  3-4人',
            message:'我们追求的是没有最长只有更长'
        },
        biaozhun:{
            subject:"关爱父母标准套餐",
            coverpath:"../../images/recommend_img_02.png",
            price:'¥1888/人',
            message:'我们追求的是没有最长只有更长！'
        },
        gaoji:{
            subject:"关爱父母高级套餐",
            coverpath:"../../images/recommend_img_03.png",
            price:'¥1588/人',
            population:'200',
            message:'我们追求的是没有最长只有更长！'

        },
        haohua:{
            subject:"关爱父母豪华全面套餐",
            coverpath:"../../images/recommend_img_05.png",
            price:'¥198/人',
            population:'200',
            message:'伊本造型是由著名形象设计师杨进先生创办。'

        },
        zuanshi:{
            subject:" 关爱父母钻石版套餐",
            coverpath:"../../images/recommend_img_06.png",
            price:'¥198/人',
            population:'200',
            message:'《微微一笑很倾城》的剧照简直美腻到不要不要的'
        }
    },{},{}



    ]
    var obj = arr[pkgctn]
    return obj[pkgtype]
}

/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPkgDetailData : getPkgDetailData,
//   getPickerData : getPickerData,
//   getSkilledData :getSkilledData,
//   userData : userData,
//   provinceData : provinceData,
//   cityData : cityData,
//   searchAddrFromAddrs : searchAddrFromAddrs

}