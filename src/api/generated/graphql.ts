import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Music = {
  __typename?: 'Music';
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  linkToFile: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  musics: Array<Music>;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadFile: Scalars['Boolean'];
};


export type MutationUploadFileArgs = {
  musicFile: Scalars['Upload'];
};


export type GetMusicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMusicsQuery = (
  { __typename?: 'Query' }
  & { musics: Array<(
    { __typename?: 'Music' }
    & Pick<Music, 'id' | 'title' | 'description' | 'linkToFile'>
  )> }
);


export const GetMusicsDocument = gql`
    query GetMusics {
  musics {
    id
    title
    description
    linkToFile
  }
}
    `;

/**
 * __useGetMusicsQuery__
 *
 * To run a query within a React component, call `useGetMusicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMusicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMusicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMusicsQuery(baseOptions?: Apollo.QueryHookOptions<GetMusicsQuery, GetMusicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMusicsQuery, GetMusicsQueryVariables>(GetMusicsDocument, options);
      }
export function useGetMusicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMusicsQuery, GetMusicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMusicsQuery, GetMusicsQueryVariables>(GetMusicsDocument, options);
        }
export type GetMusicsQueryHookResult = ReturnType<typeof useGetMusicsQuery>;
export type GetMusicsLazyQueryHookResult = ReturnType<typeof useGetMusicsLazyQuery>;
export type GetMusicsQueryResult = Apollo.QueryResult<GetMusicsQuery, GetMusicsQueryVariables>;