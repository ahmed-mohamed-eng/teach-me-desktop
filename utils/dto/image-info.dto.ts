export interface FullMetadata {
  /**
   * The bucket this object is contained in.
   */
  bucket: string;
  /**
   * The full path of this object.
   */
  fullPath: string;
  /**
   * The object's generation.
   * {@link https://cloud.google.com/storage/docs/metadata#generation-number}
   */
  generation: string;
  /**
   * The object's metageneration.
   * {@link https://cloud.google.com/storage/docs/metadata#generation-number}
   */
  metageneration: string;
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */
  name: string;
  /**
   * The size of this object, in bytes.
   */
  size: number;
  /**
   * A date string representing when this object was created.
   */
  timeCreated: string;
  /**
   * A date string representing when this object was last updated.
   */
  updated: string;
  /**
   * Tokens to allow access to the downloatd URL.
   */
  downloadTokens: string[] | undefined;
}
