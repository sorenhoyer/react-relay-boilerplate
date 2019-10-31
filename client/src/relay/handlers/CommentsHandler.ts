// eslint-disable-next-line import/no-extraneous-dependencies
import { HandleFieldPayload, RecordSourceProxy } from 'relay-runtime';
// update method will be called every time when field with `@__clientField(handle: "commentsData")` is fetched

const CommentsHandler = {
  update(store: RecordSourceProxy, payload: HandleFieldPayload): void {
    const postRecord = store.get(payload.dataID);

    if (!postRecord) return;

    const commentRecords = postRecord.getLinkedRecords(payload.fieldKey);

    postRecord.setValue(commentRecords ? commentRecords.length : 0, 'commentsCount');

    // link "comments" to postRecord, so the "comments" field in CommentList is not undefined
    postRecord.setLinkedRecords(commentRecords, payload.handleKey);
  },
};

export default CommentsHandler;
