import IssuePermissions, {CREATE_ISSUE, READ_ISSUE, UPDATE_ISSUE, CAN_UPDATE_COMMENT} from './issue-permissions';
import sinon from 'sinon';

describe('IssuePermissions', function () {
  const USER_ID = 'some-user-id';
  const PROJECT_ID = 'some-project-id';

  beforeEach(() => {
    this.permissionsMock = {
      has: sinon.stub().returns(false),
      hasEvery: sinon.stub().returns(false)
    };

    this.issueMock = {
      reporter: {ringId: USER_ID},
      project: {
        ringId: PROJECT_ID
      }
    };

    this.commentMock = {
      author: {
        ringId: USER_ID
      }
    };

    this.issuePermissions = new IssuePermissions(this.permissionsMock, {id: USER_ID});
  });

  it('should init', () => {
    this.issuePermissions.should.be.defined;
  });

  describe('canUpdateGeneralInfo', () => {
    it('should allow to edit general info if user is reporter and has READ_ISSUE', () => {
      this.permissionsMock.has.withArgs(CREATE_ISSUE).returns(true);
      this.issuePermissions.canUpdateGeneralInfo(this.issueMock).should.be.true;
    });

    it('should not allow to edit issue if user is not reporter but has READ_ISSUE', () => {
      this.issueMock.reporter = {id: 'foo'};
      this.permissionsMock.has.withArgs(CREATE_ISSUE).returns(true);
      this.issuePermissions.canUpdateGeneralInfo(this.issueMock).should.be.false;
    });

    it('should not allow to edit issue if user is reporter but not has READ_ISSUE', () => {
      this.issuePermissions.canUpdateGeneralInfo(this.issueMock).should.be.false;
    });

    it('should allow to edit if user is not reporter but has UPDATE_ISSUE and READ_ISSUE', () => {
      this.issueMock.reporter = {id: 'foo'};
      this.permissionsMock.hasEvery.withArgs([READ_ISSUE, UPDATE_ISSUE]).returns(true);

      this.issuePermissions.canUpdateGeneralInfo(this.issueMock).should.be.true;
    });

    it('should not allow to edit if user is not reporter but has READ_ISSUE and not has UPDATE_ISSUE', () => {
      this.issueMock.reporter = {id: 'foo'};
      this.issuePermissions.canUpdateGeneralInfo(this.issueMock).should.be.false;
    });
  });

  describe('canEditComment', () => {
    it('should allow to edit own comment if has update permission', () => {
      this.permissionsMock.has.withArgs(CAN_UPDATE_COMMENT).returns(true);

      this.issuePermissions.canEditComment(this.issueMock, this.commentMock).should.be.true;
    });

    it('should not allow to edit not own comment if don\'t have update-not-own permission', () => {
      this.permissionsMock.has.withArgs(CAN_UPDATE_COMMENT).returns(true);
      this.commentMock.author = {id: 'foo'};

      this.issuePermissions.canEditComment(this.issueMock, this.commentMock).should.be.false;
    });
  });
});
