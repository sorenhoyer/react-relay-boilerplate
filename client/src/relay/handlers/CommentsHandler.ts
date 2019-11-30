// eslint-disable-next-line import/no-extraneous-dependencies
import { HandleFieldPayload, RecordSourceProxy } from 'relay-runtime';
// update method will be called every time when field with `@__clientField(handle: "commentsData")` is fetched

const CommentsHandler = {
  update(store: RecordSourceProxy, payload: HandleFieldPayload): void {
    const articleRecord = store.get(payload.dataID);

    if (!articleRecord) return;

    const commentRecords = articleRecord.getLinkedRecords(payload.fieldKey);

    articleRecord.setValue(commentRecords ? commentRecords.length : 0, 'commentsCount');

    // link "comments" to articleRecord, so the "comments" field in CommentList is not undefined
    articleRecord.setLinkedRecords(commentRecords, payload.handleKey);
  },
};

export default CommentsHandler;
