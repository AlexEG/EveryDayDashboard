import responseDataInterface from "../helper/responseDataInterface";

export default function AniList_API_Call() {
  const query = `
  query($userId:Int,$userName:String,$type:MediaType){MediaListCollection(userId:$userId,userName:$userName,type:$type){lists{name isCustomList isCompletedList:isSplitCompletedList entries{...mediaListEntry}}user{id name avatar{large}mediaListOptions{scoreFormat rowOrder animeList{sectionOrder customLists splitCompletedSectionByFormat theme}mangaList{sectionOrder customLists splitCompletedSectionByFormat theme}}}}}fragment mediaListEntry on MediaList{id mediaId status score progress progressVolumes repeat priority private hiddenFromStatusLists customLists advancedScores notes updatedAt startedAt{year month day}completedAt{year month day}media{id title{userPreferred romaji english native}coverImage{extraLarge large}type format status(version:2)episodes volumes chapters averageScore popularity isAdult countryOfOrigin genres bannerImage startDate{year month day}}}
    `;
  // const query = `
  //     query($id:Int,$name:String){User(id:$id,name:$name){id name previousNames{name updatedAt}avatar{large}bannerImage about isFollowing isFollower donatorTier donatorBadge createdAt moderatorRoles isBlocked bans options{profileColor restrictMessagesToFollowing}mediaListOptions{scoreFormat rowOrder animeList{customLists sectionOrder splitCompletedSectionByFormat advancedScoring advancedScoringEnabled}mangaList{customLists sectionOrder splitCompletedSectionByFormat advancedScoring advancedScoringEnabled}}statistics{anime{count meanScore standardDeviation minutesWatched episodesWatched genrePreview:genres(limit:10,sort:COUNT_DESC){genre count}}manga{count meanScore standardDeviation chaptersRead volumesRead genrePreview:genres(limit:10,sort:COUNT_DESC){genre count}}}stats{activityHistory{date amount level}}favourites{anime{edges{favouriteOrder node{id type status(version:2)format isAdult bannerImage title{userPreferred}coverImage{large}startDate{year}}}}manga{edges{favouriteOrder node{id type status(version:2)format isAdult bannerImage title{userPreferred}coverImage{large}startDate{year}}}}characters{edges{favouriteOrder node{id name{userPreferred}image{large}}}}staff{edges{favouriteOrder node{id name{userPreferred}image{large}}}}studios{edges{favouriteOrder node{id name}}}}}}
  //   `;

  // const query2 = `query{Viewer{id name about avatar{large}bannerImage unreadNotificationCount donatorTier donatorBadge moderatorRoles options{titleLanguage staffNameLanguage restrictMessagesToFollowing airingNotifications displayAdultContent profileColor notificationOptions{type enabled}disabledListActivity{type disabled}}mediaListOptions{scoreFormat rowOrder animeList{customLists sectionOrder splitCompletedSectionByFormat advancedScoring advancedScoringEnabled}mangaList{customLists sectionOrder splitCompletedSectionByFormat advancedScoring advancedScoringEnabled}}}}`;

  // for a specific anime
  const query3 = `query media($id:Int,$type:MediaType,$isAdult:Boolean){Media(id:$id,type:$type,isAdult:$isAdult){id title{userPreferred romaji english native}coverImage{extraLarge large}bannerImage startDate{year month day}endDate{year month day}description season seasonYear type format status(version:2)episodes duration chapters volumes genres synonyms source(version:3)isAdult isLocked meanScore averageScore popularity favourites isFavouriteBlocked hashtag countryOfOrigin isLicensed isFavourite isRecommendationBlocked isFavouriteBlocked isReviewBlocked nextAiringEpisode{airingAt timeUntilAiring episode}relations{edges{id relationType(version:2)node{id title{userPreferred}format type status(version:2)bannerImage coverImage{large}}}}characterPreview:characters(perPage:6,sort:[ROLE,RELEVANCE,ID]){edges{id role name voiceActors(language:JAPANESE,sort:[RELEVANCE,ID]){id name{userPreferred}language:languageV2 image{large}}node{id name{userPreferred}image{large}}}}staffPreview:staff(perPage:8,sort:[RELEVANCE,ID]){edges{id role node{id name{userPreferred}language:languageV2 image{large}}}}studios{edges{isMain node{id name}}}reviewPreview:reviews(perPage:2,sort:[RATING_DESC,ID]){pageInfo{total}nodes{id summary rating ratingAmount user{id name avatar{large}}}}recommendations(perPage:7,sort:[RATING_DESC,ID]){pageInfo{total}nodes{id rating userRating mediaRecommendation{id title{userPreferred}format type status(version:2)bannerImage coverImage{large}}user{id name avatar{large}}}}externalLinks{id site url type language color icon notes isDisabled}streamingEpisodes{site title thumbnail url}trailer{id site}rankings{id rank type format year season allTime context}tags{id name description rank isMediaSpoiler isGeneralSpoiler userId}mediaListEntry{id status score}stats{statusDistribution{status amount}scoreDistribution{score amount}}}}`;
  // {
  //   "id": "16498",
  //   "type": "ANIME",
  //   "isAdult": false
  // }

  // just favourites
  // ("query($id:Int,$name:String){User(id:$id,name:$name){id name previousNames{name updatedAt}avatar{large}bannerImage about isFollowing isFollower donatorTier donatorBadge createdAt moderatorRoles isBlocked bans options{profileColor restrictMessagesToFollowing}mediaListOptions{scoreFormat}statistics{anime{count meanScore standardDeviation minutesWatched episodesWatched genrePreview:genres(limit:10,sort:COUNT_DESC){genre count}}manga{count meanScore standardDeviation chaptersRead volumesRead genrePreview:genres(limit:10,sort:COUNT_DESC){genre count}}}stats{activityHistory{date amount level}}favourites{anime{edges{favouriteOrder node{id type status(version:2)format isAdult bannerImage title{userPreferred}coverImage{large}startDate{year}}}}manga{edges{favouriteOrder node{id type status(version:2)format isAdult bannerImage title{userPreferred}coverImage{large}startDate{year}}}}characters{edges{favouriteOrder node{id name{userPreferred}image{large}}}}staff{edges{favouriteOrder node{id name{userPreferred}image{large}}}}studios{edges{favouriteOrder node{id name}}}}}}");

  // AniList_API_AnimeListHeaderData
  // const query = `
  // query($userId:Int,$userName:String,$type:MediaType){MediaListCollection(userId:$userId,userName:$userName,type:$type){lists{name entries{...mediaListEntry}}}}fragment mediaListEntry on MediaList{id mediaId status score repeat media{id title{userPreferred romaji english native}coverImage{extraLarge large} format status(version:2) episodes description averageScore popularity duration isAdult genres bannerImage season startDate{year month day} endDate{year month day} rankings{id rank type format year season allTime context}}}

  //   `;
  // const variables = {
  //   userId: 6482446,
  //   userName: "AlexEG",
  //   // type: "ANIME",
  //   type: "MANGA",
  // };
  const variables = {
    "id": "16498",
    "type": "ANIME",
    "isAdult": false
  }
  // const variables = {
  //   id: 6482446,
  //   name: "AlexEG",
  // };

  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query3,
        variables: variables,
      }),
    };

  return new Promise((res, rej) => {
    // Make the HTTP Api request
    fetch(url, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);

    function handleResponse(response: any) {
      return response.json().then(function (json: any) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleData(data: responseDataInterface) {
      console.log("data", data);
      res(data);
    }

    function handleError(error: any) {
      console.error(error);
    }
  });
}
