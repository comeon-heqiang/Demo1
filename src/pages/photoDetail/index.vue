<template>
    <div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      photoGroupId: 0,  
      photoGroupData: [         
            {
              photo: {
                id: 948770,
                menuId: 22323,
                sasId: 2756,
                albumId: 13076,
                title: "QQ图片20170903221629",
                totalCommentCount: 0,
                lastCommentTime: 0,
                recommendState: "R",
                createTime: 1504597026993,
                userId: 2843391,
                userNickname: "咖啡渣",
                userAvatar:
                  "http://img.saihuitong.com/2756/avatar/2843391/15e3258cb1f.jpg-cw100h100",
                url:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f8aad4.jpg",
                sourceUrl:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f8a7b4.jpg",
                urlHashCode:
                  "887887BA8855EFBFA5EE1D0C9DAE42430508EFD4D0F2CDF30FE63032C3841CD68084026A1526AD5A768A871B67DAC7E0E20",
                width: 0,
                height: 0,
                rotateAngle: 0,
                fileSize: 118411
              },
              visitStatistic: {
                type: "MenuPhoto",
                objectId: 948770,
                visitCount: 413,
                visitorIds: "",
                visitorAvas: "",
                visitorNicknames: "",
                visitorIPs: "",
                lastVisitTime: 1541579291371,
                objectCacheKey: "VisitorCountStatistic_photo_948770"
              }
            },
            {
              photo: {
                id: 948769,
                menuId: 22323,
                sasId: 2756,
                albumId: 13076,
                title: "QQ图片20170903221611",
                totalCommentCount: 0,
                lastCommentTime: 0,
                recommendState: "R",
                createTime: 1504597026564,
                userId: 2843391,
                userNickname: "咖啡渣",
                userAvatar:
                  "http://img.saihuitong.com/2756/avatar/2843391/15e3258cb1f.jpg-cw100h100",
                url:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f8b08b.jpg",
                sourceUrl:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f8a538.jpg",
                urlHashCode:
                  "B9A67F11571BC785DFEA09EC8E37E20B0D9E260B1029C31701473462C404651A70E237B0A5724B8D1CCECD61F23AE4F7E0",
                width: 0,
                height: 0,
                rotateAngle: 0,
                fileSize: 368432
              },
              visitStatistic: {
                type: "MenuPhoto",
                objectId: 948769,
                visitCount: 367,
                visitorIds: "",
                visitorAvas: "",
                visitorNicknames: "",
                visitorIPs: "",
                lastVisitTime: 1541561428100,
                objectCacheKey: "VisitorCountStatistic_photo_948769"
              }
            },
            {
              photo: {
                id: 948768,
                menuId: 22323,
                sasId: 2756,
                albumId: 13076,
                title: "QQ图片20170903213358",
                totalCommentCount: 0,
                lastCommentTime: 0,
                recommendState: "R",
                createTime: 1504597025358,
                userId: 2843391,
                userNickname: "咖啡渣",
                userAvatar:
                  "http://img.saihuitong.com/2756/avatar/2843391/15e3258cb1f.jpg-cw100h100",
                url:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f8b1fb.jpg",
                sourceUrl:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f89d83.jpg",
                urlHashCode:
                  "E3491F3A0547060BE8FFB6A434889C20A30B2426ABCFC115D9A1BD1FC1CF97BB0899533590BA083F75CF7B3C93C9777670",
                width: 0,
                height: 0,
                rotateAngle: 0,
                fileSize: 502611
              },
              visitStatistic: {
                type: "MenuPhoto",
                objectId: 948768,
                visitCount: 338,
                visitorIds: "",
                visitorAvas: "",
                visitorNicknames: "",
                visitorIPs: "",
                lastVisitTime: 0,
                objectCacheKey: "VisitorCountStatistic_photo_948768"
              }
            },
            {
              photo: {
                id: 948767,
                menuId: 22323,
                sasId: 2756,
                albumId: 13076,
                title: "QQ图片20170903213341",
                totalCommentCount: 0,
                lastCommentTime: 0,
                recommendState: "R",
                createTime: 1504597023056,
                userId: 2843391,
                userNickname: "咖啡渣",
                userAvatar:
                  "http://img.saihuitong.com/2756/avatar/2843391/15e3258cb1f.jpg-cw100h100",
                url:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f8aa96.jpg",
                sourceUrl:
                  "http://img.saihuitong.com/2756/albumimg/2843391/15e50f894ed.jpg",
                urlHashCode:
                  "06248D4E78A8941963ACEDE8933018F9042C1D54997F1845E1A6020271D1AA8CC079E2E366C32B6B90BB9C5E5CB30BA4B0",
                width: 0,
                height: 0,
                rotateAngle: 0,
                fileSize: 470281
              },
              visitStatistic: {
                type: "MenuPhoto",
                objectId: 948767,
                visitCount: 354,
                visitorIds: "",
                visitorAvas: "",
                visitorNicknames: "",
                visitorIPs: "",
                lastVisitTime: 1541558135173,
                objectCacheKey: "VisitorCountStatistic_photo_948767"
              }
            }
      ]
    };
  },
  onLoad(options) {
    this.photoGroupId = options.photoGroupId;   
    wx.setNavigationBarTitle({
      title: options.title
    })
  }
};
</script>

<style scoped>
</style>