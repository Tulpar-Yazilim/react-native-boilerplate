import React, {memo, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {projectColors} from '@/assets';
import {useThemeColors, useThemeMode} from '@/hooks';

import AppView from '../AppView';
import {AppListProps} from './type';

function AppList<T>(props: AppListProps<T>) {
  const {
    data,
    renderItem,
    pagination = false,
    loading,
    onEndReached,
    onEndReachedThreshold = 0.8,
    preloader,
    preloaderLength,
    preloaderWidth,
    preloaderHeight,
    preloaderContainerStyle,
    horizontal = false,
    sticky = false,
    contentContainerStyle,
    removeClippedSubviews = true,
    flex,
    onRefreshData,
    ...rest
  } = props;

  const themeMode = useThemeMode();
  const colors = useThemeColors();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await onRefreshData?.();
    setRefreshing(false);
  };

  const renderFooter = () => {
    if (!loading) {
      return <></>;
    }
    return (
      <AppView flex justify="center" align="center" py-15>
        <ActivityIndicator animating color={themeMode === 'light' ? projectColors.black : projectColors.white} size="large" />
      </AppView>
    );
  };

  const PreloaderRenderItem = <AppView style={[{height: preloaderHeight, width: preloaderWidth, marginBottom: 10}, preloaderContainerStyle]} />;

  return preloader ? (
    <React.Fragment>
      {horizontal ? (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal style={preloaderContainerStyle}>
          {[...Array(preloaderLength)]?.map(() => PreloaderRenderItem)}
        </ScrollView>
      ) : (
        <AppView flex flexWrap="wrap" justify="center" style={preloaderContainerStyle}>
          {[...Array(preloaderLength)]?.map(() => PreloaderRenderItem)}
        </AppView>
      )}
    </React.Fragment>
  ) : (
    <FlashList
      data={data ?? []}
      renderItem={renderItem}
      ListFooterComponent={pagination ? renderFooter : null}
      onEndReached={pagination ? onEndReached : null}
      onEndReachedThreshold={onEndReachedThreshold}
      refreshControl={onRefreshData ? <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> : undefined}
      keyExtractor={(_item, index) => `app_list_item_${index}`}
      contentContainerStyle={contentContainerStyle}
      removeClippedSubviews={removeClippedSubviews}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={horizontal}
      stickyHeaderIndices={sticky ? [0] : undefined}
      style={{
        height: flex ? '100%' : 'auto',
      }}
      {...rest}
    />
  );
}

export default memo(AppList);
