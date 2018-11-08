<template>
    <div class="photo-list bcw p10">
        <ul>
            <li v-for="(item,index) in photoList" :key="index" @click="toDetail(item)">
                <img :src="item.coverPhotoUrl" alt="">
                <div>
                    <h2>
                        {{item.title}}
                    </h2>
                    {{item.totalPhotoCount}}张相片
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      photoList: [
        {
          id: 15711,
          userId: 2852592,
          userNickname: "大懒虫",
          userAvatar:
            "http://img.saihuitong.com/2756/avatar/2852592/1638bea6d68.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "风雨溪山 温暖同行 2015年杭州溪山行户外俱乐部年会",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2852592/162d24e6f50.jpg",
          coverPhotoId: 1188154,
          totalPhotoCount: 957,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "S",
          lastUploadTime: 1528364776406,
          lastUploadPhotoId: 1300468,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 117662601,
          createTime: 1523945736435
        },
        {
          id: 15056,
          userId: 2857257,
          userNickname: "橘子",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2857257/15e4bde16ff.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "20160619杏梅尖",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2857257/161e4f2eb8f.jpg",
          coverPhotoId: 1135298,
          totalPhotoCount: 50,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1519965374300,
          lastUploadPhotoId: 1135335,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 169881047,
          createTime: 1519964228549
        },
        {
          id: 15051,
          userId: 2857257,
          userNickname: "橘子",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2857257/15e4bde16ff.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "20171127清理午潮山",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2857257/161dfeb00ef.jpg",
          coverPhotoId: 1134843,
          totalPhotoCount: 24,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 1,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1519880708990,
          lastUploadPhotoId: 1134862,
          lastCommentTime: 1522742535982,
          totalFavorityCount: 0,
          totalPhotoStorage: 119065329,
          createTime: 1519878436855
        },
        {
          id: 15050,
          userId: 2857257,
          userNickname: "橘子",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2857257/15e4bde16ff.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "遂昌杜鹃花",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2857257/161dfb644b8.jpg",
          coverPhotoId: 1134731,
          totalPhotoCount: 125,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1519877420463,
          lastUploadPhotoId: 1134807,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 531392184,
          createTime: 1519874354956
        },
        {
          id: 15049,
          userId: 2857257,
          userNickname: "橘子",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2857257/15e4bde16ff.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "20180128杏梅尖探雪",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2857257/161df7b032d.jpg",
          coverPhotoId: 1134625,
          totalPhotoCount: 43,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1519872948761,
          lastUploadPhotoId: 1134634,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 79490066,
          createTime: 1519872343030
        },
        {
          id: 15048,
          userId: 2857257,
          userNickname: "橘子",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2857257/15e4bde16ff.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "植物园",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2857257/161df6b47ed.jpg",
          coverPhotoId: 1134507,
          totalPhotoCount: 52,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1537088216158,
          lastUploadPhotoId: 1425531,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 52778787,
          createTime: 1519871440150
        },
        {
          id: 14495,
          userId: 2852592,
          userNickname: "大懒虫",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2852592/15e366fd9f4.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "20151214 白日飞升清凉峰",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2852592/160cb9c109e.jpg",
          coverPhotoId: 1097334,
          totalPhotoCount: 129,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1515244840685,
          lastUploadPhotoId: 1097462,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 16664056,
          createTime: 1515244480412
        },
        {
          id: 14494,
          userId: 2852592,
          userNickname: "大懒虫",
          userAvatar:
            "http://img.saihuitong.com/10/avatar/2852592/15e366fd9f4.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "20141228 西湖群山清理第一期",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2852592/160cb8db984.jpg",
          coverPhotoId: 1097174,
          totalPhotoCount: 145,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1515243944979,
          lastUploadPhotoId: 1097333,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 18404356,
          createTime: 1515243506301
        },
        {
          id: 14245,
          userId: 2862446,
          userNickname: "金彩彩",
          userAvatar:
            "http://st.saihuitong.com/res/img/avatars/system/5_ava001.jpg",
          menuId: 22323,
          sasId: 2756,
          title: "西湖群山标毅",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2862446/1604ee018ab.jpg",
          coverPhotoId: 1069862,
          totalPhotoCount: 39,
          totalPhotoRecommendCount: 0,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1521014825663,
          lastUploadPhotoId: 1144139,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 73777934,
          createTime: 1513151628010
        },
        {
          id: 13163,
          userId: 2843391,
          userNickname: "咖啡渣",
          userAvatar:
            "http://img.saihuitong.com/2756/avatar/2843391/15e3258cb1f.jpg-cw100h100",
          menuId: 22323,
          sasId: 2756,
          title: "运河",
          coverPhotoUrl:
            "http://img.saihuitong.com/2756/albumimg/2843391/15e7a01eb48.jpg",
          coverPhotoId: 954701,
          totalPhotoCount: 45,
          totalPhotoRecommendCount: 7,
          totalCommentCount: 0,
          photoCommentPubAuthority: "A",
          photoUploadAuthority: "A",
          photoDisplayType: "R",
          lastUploadTime: 1530660803994,
          lastUploadPhotoId: 1332828,
          lastCommentTime: 0,
          totalFavorityCount: 0,
          totalPhotoStorage: 21976983,
          createTime: 1505285329859
        }
      ]
    };
  },
  methods: {
    toDetail(item) {
      wx.navigateTo({
        url: "/pages/photoDetail/main?photoGroupId=" + item.id+'&title='+item.title
      });
    }
  }
};
</script>

<style scoped lang="scss">
.photo-list {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      width: 49%;
      margin-bottom: 2%;
      img {
        display: block;
        width: 100%;
        height: 160px;
      }
      div {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        h2 {
          margin-bottom: 5px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>